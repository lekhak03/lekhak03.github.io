
# Building RSA Encryption from Scratch in Java

**By \[Deepak Lekhak]**
*Portfolio Project – Cryptography & Security Engineering*

---

### Introduction

Most of us rely on cryptographic systems every day — from messaging apps to online banking — without thinking about what’s happening under the hood. As a developer passionate about system-level understanding, I decided to implement RSA encryption entirely from first principles in Java — no external cryptographic libraries, just raw number theory and secure logic.

This post explains the mathematical foundation, key implementation steps, and a walkthrough of how I built `CryptIt.java`, my RSA encryption engine, with database integration for secure key storage.

---

### What is RSA?

RSA (Rivest–Shamir–Adleman) is a public-key cryptosystem that relies on the computational difficulty of factoring large prime numbers. It’s widely used for secure data transmission.

The security of RSA hinges on three mathematical principles:

1. **Prime factorization** is hard (especially with large numbers).
2. **Modular arithmetic** enables trapdoor functions — easy one way, hard to reverse without a key.
3. **Euler's Theorem** provides the groundwork for the modular inverse that acts as the decryption key.

---

### The CryptIt Class: Overview

This class handles RSA key generation, encryption, decryption, and private key storage in a PostgreSQL database. Here’s a breakdown of its core components:

---

### 🔐 Key Generation

```java
keyPair.p = generatePrime(random);
keyPair.q = generatePrime(random);
keyPair.modulus = p * q;
```

To begin, I generate two large, random primes `p` and `q` using Java’s `BigInteger` with the Miller-Rabin primality test. Their product, `n = p * q`, forms the modulus.

```java
keyPair.publicKey = new BigInteger("3");
```

For simplicity, I used a small fixed public exponent `e = 3`, which is acceptable for small-scale encryption (though `65537` is more typical in practice).

```java
keyPair.privateKey = LinDinEqSolve.myLDE(e, (p-1)(q-1));
```

I compute the modular inverse of `e` modulo ϕ(n) using my custom `myLDE()` method (Linear Diophantine Equation Solver), yielding the private key `d`.

---

### 🧮 Solving for the Private Key

RSA’s decryption key `d` must satisfy the condition:

```
e * d ≡ 1 (mod (p-1)(q-1))
```

This is a classic modular inverse problem. I implemented it as:

```java
public static BigInteger myLDE(BigInteger e, BigInteger UppBound) {
    if (e.gcd(UppBound).equals(BigInteger.ONE)) {
        return e.modInverse(UppBound);
    }
    return null;
}
```

This ensures `e` is coprime to the totient and calculates the inverse safely.

---

### 🧾 Database Integration

To simulate real-world key persistence, I integrated PostgreSQL for secure key storage. This means:

* If a key exists, it’s retrieved and reused.
* If not, a fresh keypair is generated and stored.

```java
ResultSet resultSet = db.executeSql("SELECT privateexp FROM keypair...");
```

This approach makes it easy to scale future builds with user-specific key management.

---

### 🔐 Encryption and Decryption

Here’s the beauty of RSA in action:

#### Encrypt:

```java
c = m^e mod n
```

Each byte of a message is encrypted separately:

```java
m = new BigInteger(String.valueOf(msgBytes[i]));
c = m.modPow(publicKey, modulus);
```

#### Decrypt:

```java
m = c^d mod n
```

And during decryption, each byte is restored:

```java
msgBytes[i] = msgBytes[i].modPow(privateKey, modulus);
```

Finally, we reassemble the decrypted message with `UTF-8` encoding.

---

### 🧪 Sample Output

Running the sample in `Main.java`:

```java
Original Message: Hello World  
Encrypted Message: [146, 143, ...]  
Decrypted Message: Hello World  
```

---

### Lessons Learned

Building RSA from scratch gave me deep insight into:

* Modular arithmetic and cryptographic number theory.
* Database interaction for cryptographic persistence.
* Secure random prime generation and its edge cases.
* Handling encoding/decoding when working byte-wise with encryption.

This was not only an exercise in implementing cryptography but also in building a mini security system that combines Java, SQL, and mathematics.

**Tags**: `#Java`, `#Cryptography`, `#RSA`, `#SecurityEngineering`, `#PostgreSQL`, `#BigInteger`
