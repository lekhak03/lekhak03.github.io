# Face Authentication System Using FaceNet Unified Embedding

Facial authentication is one of the most elegant applications of deep learning. But doing it right means moving beyond classification and towards embedding-based learning. In this blog, I’ll walk you through how I implemented FaceNet from scratch in TensorFlow/Keras — step-by-step, explaining every line and concept — so that you can build your own facial recognition pipeline using triplet loss and unified embeddings.

> 🧠 Reference: [FaceNet: A Unified Embedding for Face Recognition and Clustering (Schroff et al.)](https://arxiv.org/abs/1503.03832)

---

## 🔒 What We're Building

A face authentication system where:

* Each face is embedded into a 128-dimensional vector.
* The distance between faces represents similarity.
* Training uses **triplet loss** to ensure:

  > distance(anchor, positive) + α < distance(anchor, negative)

---

## 📁 File 1: `triplet_loss.py`

Triplet loss is at the heart of FaceNet. It's what trains the model to learn useful embeddings.

```python
def triplet_loss(y_true, y_pred, alpha=0.3):
```

We don’t use `y_true` because this is not a classification task. Instead:

```python
anchor, positive, negative = y_pred[0], y_pred[1], y_pred[2]
```

We compute squared Euclidean distances:

```python
pos_dist = tf.reduce_sum(tf.square(anchor - positive), axis=-1)
neg_dist = tf.reduce_sum(tf.square(anchor - negative), axis=-1)
```

Then calculate the triplet loss:

```python
basic_loss = pos_dist - neg_dist + alpha
loss = tf.reduce_sum(tf.maximum(basic_loss, 0.0))
```

This ensures that positive pairs are closer than negative ones — with some margin `alpha`.

---

## 🧪 File 2: `preprocess.py`

### 🧹 Image Selection

We randomly select anchors, positives (same person), and negatives (different person):

```python
def select_dir(data_path):
    index = random.randint(0, 71)
    return data_path + f'/{index}.png'
```

For negatives:

```python
def select_negdir(data_path, anchor_no):
    # Ensures negative is NOT from the same folder
```

### 🔁 Build a Batch of Triplets

```python
triplet_batch = triplet_selection(DATA_DIR)
```

This returns a list of file paths like:

```python
[['test/25/25.png', 'test/25/25_1.png', 'test/61/61.png'], ...]
```

### 🖼️ Load and Preprocess Images

```python
img_to_array(load_img(..., target_size=(112, 112)))
```

Images are loaded and reshaped to `112x112x3`, then grouped as triplets.

### 📏 Compute Embeddings and Labels

```python
def compute_embeddings(images, model):
    images = images.astype('float32') / 255.0
    return model.predict(images)
```

```python
def prepare_labels(triplets, model):
    ...
    label = 1 if dist(anchor, positive) < dist(anchor, negative) else 0
```

We generate labels based on distances — not class categories — for contrastive learning.

---

## 🧠 File 3: `inception_mdlls.py`

This file defines the **Inception Module**, the core convolutional block from GoogLeNet.

```python
def inception_module(...):
```

It stacks:

* `1x1`, `3x3`, and `5x5` convolutions
* Pooling with `1x1` projection

All four outputs are concatenated along the channel axis:

```python
inception_module = concatenate([...], axis=-1)
```

This allows the network to capture **multi-scale features**, crucial for faces with variation.

---

## 🧰 File 4: `facenet_model.py`

This is where the full model is constructed — stacking the Inception modules and culminating in a 128D vector.

### 🧱 Input Layer

```python
input_layer = Input(shape=(112, 112, 3))
```

### 🔗 Stacked Inception Modules

```python
inception_2 = inception_module(...)
...
inception_5b = inception_module(...)
```

We use multiple Inception layers as inspired by the original FaceNet paper.

### 🧮 Fully Connected Embedding

```python
avgpool = AveragePooling2D(...)
fully_conn = Dense(128, activation='relu')
global_avg_pool = GlobalAveragePooling2D()
```

This condenses all spatial features into a 128D vector.

### 📦 Final L2 Normalization

```python
l2_norm = BatchNormalization()(global_avg_pool)
```

This ensures all embeddings lie on a unit hypersphere — a key trick from the paper.

### 🔧 Compile Model

```python
model.compile(Adam(learning_rate=0.001), loss=triplet_loss)
```

We use `Adam` with learning rate `0.001` and our custom loss function.

---

## 📸 Get Image Utility

```python
def get_image(dataset_path, person, index):
    ...
    img = cv2.imread(...)
    ...
    img = np.expand_dims(img, axis=0)
```

This helper reads and normalizes images. Used when testing inference or feeding new data to the model.

---

## 🚀 Inference and Embedding Output

```python
input_emd = facenet_model.predict(data)
print(input_emd.max())
```

Here, we take one face and generate its embedding. The output vector can now be compared with others for authentication.

---

## 📌 Conclusion

What we’ve built here is not just a face recognition system — but a **face embedding engine**. By using triplet loss and embedding vectors, we unlock:

* Authentication ✅
* Clustering ✅
* Face verification ✅

This mirrors real-world systems like Google Photos and Apple FaceID.

### 🔁 Next Steps

* Train on a large, diverse dataset (e.g., VGGFace2 or LFW).
* Use hard triplet mining to improve accuracy.
* Save embeddings and compare using cosine similarity or Euclidean distance.

---

## 🧠 Summary

| Component            | Function                                       |
| -------------------- | ---------------------------------------------- |
| `triplet_loss.py`    | Learns meaningful face distances               |
| `preprocess.py`      | Loads and generates image triplets             |
| `inception_mdlls.py` | Custom Inception blocks for multi-scale vision |
| `facenet_model.py`   | Full model building and embedding pipeline     |

Let me know if you’re trying this out — I’d love to see your experiments!

---

*Want to build your own FaceNet system or compare notes? [Connect with me](https://www.linkedin.com/in/dlekhak/) and let's discuss applied machine learning.*
