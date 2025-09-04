# Email Sorter Using Gmail API: A Complete Walkthrough

Managing a cluttered inbox can feel like drowning in a flood of unread and unorganized emails. This is where automation steps in to save the day. In this project, we build an **Email Sorter using Gmail API and Python**, which reads your emails, preprocesses the content, and categorizes them into Gmail labels.

This blog covers each component of the project in detail, with reference to the code files shared in the repository. Whether you're a beginner looking to integrate the Gmail API or want to automate your email classification with Python, this guide will walk you through every step.

---

## Project Overview

This Python project does the following:

1. Connects to Gmail using OAuth2 credentials.
2. Fetches messages and existing labels.
3. Extracts and decodes email content.
4. Preprocesses the text using NLP (NLTK).
5. Prepares for classification based on defined categories.
6. Updates JSON files to maintain persistent data state.

---

## Gmail Authentication (File: `gmail_auth.py`)

The `CredsUser` class handles the full OAuth2 flow required to access Gmail. The `get_creds()` method:

```python
if os.path.exists('data/token.json'):
    creds = Credentials.from_authorized_user_file('data/token.json', cls.SCOPES)
```

If credentials are not available or invalid, the flow creates a new token from the `credentials.json`:

```python
flow = InstalledAppFlow.from_client_secrets_file('data/credentials.json', cls.SCOPES)
creds = flow.run_local_server(port=0)
```

Once credentials are authorized, we build the Gmail service object:

```python
service = build('gmail', 'v1', credentials=creds)
```

### Fetching Labels and Emails

* `get_label()` fetches all current Gmail labels and updates `label_data.json`.
* `get_msg()` gets up to 5 messages (changeable via `maxResults`), decodes the content from base64, and appends the plain text part into `msgs.json`:

```python
msg_str = base64.urlsafe_b64decode(body_msg['raw'].encode("utf-8")).decode("utf-8")
mime_msg = email.message_from_string(msg_str)
```

Email body is extracted using:

```python
def get_email_body(message):
    for part in message.walk():
        if part.get_content_type() == "text/plain":
            return part.get_payload(decode=True).decode(part.get_content_charset(), 'ignore')
```

---

## Email Preprocessing (File: `data_preprocess.py`)

The emails stored in `msgs.json` are raw and unstructured. We clean this data using NLP methods. Here’s the full breakdown of the `preprocess()` function:

```python
def preprocess(text):
    text = text.lower()
    text = re.sub(r"\s+", " ", text)
    text = re.sub(r'<https?://[^>]*>|http[s]?://...>', "", text)
    tokens = word_tokenize(text)
    tokens = [t for t in tokens if t.isalpha()]
    tokens = [t for t in tokens if not t in stop_words]
    tokens = [stemmer.stem(t) for t in tokens]
    tokens = [lemmatizer.lemmatize(t) for t in tokens]
    return ' '.join(tokens)
```

This function:

* Converts to lowercase
* Removes URLs and extra spaces
* Tokenizes and filters non-alphabetical tokens
* Removes stopwords
* Applies stemming and lemmatization

The script applies preprocessing to all messages:

```python
for data in data_str:
    result = preprocess(data)
    data_str[count]= result
```

Finally, it writes the cleaned data back into `msgs.json` using the `update()` function.

---

## Running the Project (File: `main.py`)

This is the execution script that acts as a wrapper:

* Authenticates using OAuth2
* Saves label names and IDs to `label_data.json`
* Fetches message IDs and appends new ones to `msgs.json`
* Decodes raw messages into strings and stores them in the same file

The purpose is to initialize all necessary data before processing or classification.

```python
service = build('gmail', 'v1', credentials=creds)
results = service.users().labels().list(userId='me').execute()
labels = results.get('labels', [])
```

---

## Directory and File Structure

```bash
email-sorter/
├── data/
│   ├── credentials.json
│   ├── label_data.json
│   ├── msgs.json
│   └── token.json
├── gmail_auth.py
├── data_preprocess.py
├── main.py
├── requirements.txt
```

---

## Classification (To Be Implemented)

This is where you can take the project further:

* Define keyword-based classification rules
* Use logistic regression, SVM, or Naive Bayes for categorization
* Train a model using labeled email data
* Assign labels using `users().messages().modify()` API call

---

## Installing Requirements

Use the provided `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

## Final Thoughts

This project gave me hands-on experience with:

* OAuth2 flow
* Using Gmail API
* Text preprocessing and NLP
* JSON-based local data persistence

It’s a strong foundation for automating email workflows. With classification added, it can become a powerful personal email assistant. Stay tuned for the next phase where we integrate classification models.

---