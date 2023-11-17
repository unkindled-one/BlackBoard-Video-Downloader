# BlackBoard-Video-Downloader
This is a workaround I used to download Kaltura videos off of BlackBoard on Firefox. 

# Dependencies
[yt-dlp](https://github.com/yt-dlp/yt-dlp)

# Usage
## Overview 
My workaround uses a Firefox extension to read the network data and find the links for the BlackBoard videos.
It then uses a python script to clean up the data from the console and download the videos using yt-dlp.
## Step-By-Step
1. Clone this entire repository
2. Start the extension in debug mode in your browser. You can do this by entering `about:debugging` in the search bar of Firefox,
then clicking on `This Firefox`. Then, you click the `Load Temporary Add-on` button and navigate to where you cloned the repository, 
select any file in the `BlackBoardLinkFinder` folder and it will start the extension. Finally, click the inspect button on the expension
you just opened, this is where the output from the extension will go.
3. Log into BlackBoard as normal. Navigate to where the videos you want to download are stored.
4. For each video you want to download, click play and wait for it to load.
5. When you are done clicking all the videos, right click on the extension inspect window and select `Save All Messages to File`. 
/![Screenshot 2023-11-17 072834](https://github.com/unkindled-one/BlackBoard-Video-Downloader/assets/87220291/5f740439-09a9-44d7-ae21-9b3fde252794)
6. Go into cleaner.py and replace the path to data to where you saved the messages and the download path to where you want to download the videos.
7. Run `python cleaner.py` and your videos will be downloaded.
8. (Optional) Rename the files to have more meaningful names than their internal IDs.
