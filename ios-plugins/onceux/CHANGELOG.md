## Release 6.0.2

### Brightcove Player SDK for iOS (Core)

#### Additions and Improvements

* Improves error reporting for downloading videos. Previoiusly, some errors were recorded but not reported right away to the Offline Video Manager deletate.
* Fixes pause and resume functionality for downloading videos.
* Fixes an issue where the UI could hang when using the `AVPlayerViewController` class.


## Release 6.0.1

#### Breaking Changes

* This and future releases of Brightcove Native Player for iOS will include all software components, all having the same version number. When building your app with Brightcove Native Player for iOS components, the component version numbers must always match. As an example, when using version 6.0.1 of the FreeWheel Plugin for Brightcove Player SDK for iOS, you must also use version 6.0.1 of the core Brightcove Player SDK for iOS. Each component will continue to be available from an individual GitHub repositories.
* The Brightcove Podspecs repository has moved and the Pods have been renamed. The Podspecs are now available at [https://github.com/brightcove/BrightcoveSpecs](https://github.com/brightcove/BrightcoveSpecs).
* All CocoaPods podfiles that use Brightcove frameworks should include a reference to the Brightcove Podspecs at the top of the podfile:

```
source 'https://github.com/brightcove/BrightcoveSpecs.git'
```

* CHANGELOG.md (this file) has been consolidated to include all Brightcove Native Player for iOS software components.

### Brightcove Player SDK for iOS (Core)
#### Breaking Changes

* The BrightcoveFairPlay module is now integrated into the core BrightcovePlayerSDK module and framework. No functional code changes are required, but you should make these changes for your build:
	* Remove BrightcoveFairPlay.framework from your project.
	* If using CocoaPods, remove all references to BrightcoveFairPlay from your Podfiles, and then update.
	* In your source code, change any #includes from `<BrightcoveFairPlay/header_name.h>` to `<BrightcovePlayerSDK/header_name.h>`.
	* Remove any imports that refer to the BrightcoveFairPlay module.
* The BrightcoveSidecarSubtitles module is now integrated into the core BrightcovePlayerSDK module and framework. No functional code changes are required, but you should make these changes for your build:
	* Remove BrightcoveSidecarSubtitles.framework from your project.
	* If using CocoaPods, remove all references to BrightcoveSidecarSubtitles from your Podfiles, and then update.
	* In your source code, change any #includes from `<BrightcoveSidecarSubtitles/header_name.h>` to `<BrightcovePlayerSDK/header_name.h>`.
	* Remove any imports that refer to the BrightcoveSidecarSubtitles module.

#### Additions and Improvements

* Supports downloading FairPlay-encrypted HLS videos, and playing them back from storage while online or offline.
* New classes and types to support offline playback: `BCOVOfflineVideoManager`, `BCOVOfflineVideoStatus`, `BCOVOfflineVideoToken`, `BCOVOfflineVideoDownloadState`.
* Please see our app developer's guide for full details: [iOS App Developer's Guide to Video Downloading and Offline Playback with FairPlay](OfflinePlayback.md)
* The `BCOVVideo` class has three new properties:
	* `BOOL canBeDownloaded`: Returns YES if this video object can be downloaded for offline playback
	* `BOOL offline`: Returns YES if this instance refers to an offline video.
	* `BOOL playableOffline`: Returns YES if this instance refers to an offline video playable from the device's local storage. Returns NO if the video has not completed downloading, or if the video has been purged and needs to be re-downloaded.
* The publisher ID can be nil when calling `-[BCOVFPSBrightcoveAuthProxy initWithPublisherId:applicationId:]`. Neither value is needed for Dynamic Delivery accounts.
* Fixes an issue where multiple check marks could appear unintentionally when making language or audio selections in the Audio & Subtitles control's view in the PlayerUI.
* Adds the `BCOVPlayerSDKManager` class method `sharedManagerWithOptions:` that returns the same singleton `BCOVPlayerSDKManager` class instance, but accepts an options dictionary as a parameter. This is reserved for future use related to debug logging.


### FreeWheel Plugin for Brightcove Player SDK for iOS
#### Additions and Improvements
* The FreeWheel Plugin for Brightcove Player SDK now supports version 6.15.0 of the FreeWheel Ad Manager framework.

### IMA Plugin for Brightcove Player SDK for iOS
#### Additions and Improvements
* Fixes and issue where the video view start time was sometimes reported incorrectly for Quality of Service metrics.

### Omniture Plugin for Brightcove Player SDK for iOS
#### Additions and Improvements
* Fixes and issue where the video view start time was sometimes reported incorrectly for Quality of Service metrics.

### OnceUX Plugin for Brightcove Player SDK for iOS
#### Additions and Improvements
* Fixes and issue where the video view start time was sometimes reported incorrectly for Quality of Service metrics.