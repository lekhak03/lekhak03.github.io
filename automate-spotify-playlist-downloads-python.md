## 📝 Blog: **Automate Spotify Playlist Downloads Using YouTube and Python**

If you love music and want to automate downloading your favorite Spotify playlists for offline listening, this project might be exactly what you need.

I built a Python script that:

* Takes a Spotify playlist URL,
* Extracts song info using Spotify’s API,
* Searches for the corresponding YouTube audio,
* Downloads the audio,
* Converts it to MP3,
* Tags the MP3 with metadata and album art.

All automated with popular Python libraries like `pytube`, `moviepy`, and `eyed3`.

---

### Why Build This?

Spotify is great, but sometimes you want local copies for use in projects, offline listening, or other apps without DRM restrictions. Instead of manually downloading every track, this script does the heavy lifting for you.

---

### How Does It Work? Step-by-Step Explanation

---

#### 1. Getting the Spotify Playlist ID

The script asks you to enter the Spotify playlist URL. It then extracts just the playlist ID by splitting the URL string.

```python
def get_playlist_id(str):
    playlist_id_0 = str.split("playlist/")
    playlist_id_1 = playlist_id_0[1]
    playlist_id_2 = playlist_id_1.split("?")
    return playlist_id_2[0]
```

---

#### 2. Authenticating with Spotify API

Spotify requires an access token for most API calls. Here, the script cleverly scrapes an access token from Spotify’s public site with `requests` and `BeautifulSoup`, so you don't need to manage OAuth tokens manually.

```python
def get_new_token():
    r = requests.request("GET", "https://open.spotify.com/")
    r_text = BeautifulSoup(r.content, "html.parser").find("script", {"id": "session"}).get_text()
    return json.loads(r_text)['accessToken']
```

---

#### 3. Fetching Playlist Tracks

Using the token, the script calls the Spotify playlist API to get up to 100 tracks with metadata including song name, artist, album, and cover art URL.

```python
def get_track1234(playlist_id, offset, limit, token):
    # builds URL with pagination (offset and limit)
    # makes a GET request with authorization header
    # returns JSON response parsed to dict
```

---

#### 4. Preparing Song Info

It extracts song titles, artists, album names, and album art URLs into separate lists. It also checks if the file already exists locally to avoid re-downloading.

```python
def get_track(dict_tracks, no_songs):
    # loops over tracks
    # cleans up names to avoid file path issues
    # appends song metadata to lists
```

---

#### 5. Searching YouTube for Each Track

Next, it uses the `youtubesearchpython` library to search YouTube for the song + artist + "audio" keyword to find the best match, then grabs the video URL.

```python
def get_id(no_songs):
    # searches YouTube for each song title and artist
    # appends first video URL to list_song_url
```

---

#### 6. Downloading and Processing the Audio

Using `pytube`, it downloads the highest resolution video for each track, then extracts audio with `moviepy`. The audio is saved as an MP3 file.

```python
def down_song(link):
    youtubeObject = YouTube(link)
    youtubeObject = youtubeObject.streams.get_highest_resolution()
    song = youtubeObject.download(output_path= cwd + "mp3down/videos")
```

---

#### 7. Adding Album Art and Metadata

The script downloads album art and tags each MP3 with artist, album, and cover image using `eyed3`.

```python
audiofile.tag.images.set(ImageFrame.FRONT_COVER, open(file_name,'rb').read(), 'image/jpeg')
audiofile.tag.album = list_song_album[i]
audiofile.tag.artist = list_song_artists[i]
audiofile.tag.save(version=eyed3.id3.ID3_V2_3)
```

---

#### 8. Cleaning Up

Once the MP3 is tagged, the video and image files are deleted to save space.

---

### Bonus: Auto-installing Dependencies

## requirements.txt

```
youtube-search-python
pytube
moviepy
requests
eyed3
beautifulsoup4
```

### Package Purpose Overview

1. **youtube-search-python**
   Used to programmatically search YouTube videos. In your project, it helps find YouTube links for songs based on search queries.

2. **pytube**
   Handles YouTube video downloading. You use it to download videos once you have the URLs.

3. **moviepy**
   For video editing and processing. You extract audio from downloaded videos with it.

4. **requests**
   A powerful HTTP library for Python. Your project uses it to fetch data from Spotify’s API and download cover images.

5. **eyed3**
   For working with audio metadata tags. It’s used to embed album art, artist, and album info into your MP3 files.

6. **beautifulsoup4**
   A library for parsing HTML and XML. Used here to scrape the access token from Spotify’s webpage.

---

### How to Install

Run this in your terminal to install all dependencies at once:

```bash
pip install -r requirements.txt
```


### What I Learned

* How to use public APIs by extracting tokens without OAuth flow.
* Using YouTube as a fallback to get audio tracks.
* Combining multiple Python libraries (pytube, moviepy, eyed3) for audio processing.
* Automating metadata tagging for a polished output.

---