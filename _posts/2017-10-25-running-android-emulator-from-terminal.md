---
layout: post
title:  "How run android emulator from terminal"
date:   2017-10-25
keywords: "android, emulator"
categories: [Android]
tags: [Android]
icon: fa-android
      
---
After all, list created avd's:

**ANDROID_HOME** or **\AppData\Local\Android** on **Windows** 
```
c:\Users\YOUR_USER\AppData\Local\Android\sdk\tools\android.bat list avd

    Name: Nexus_5X_API_26_x86
  Device: Nexus 5X (Google)
    Path: C:\Users\felansu\.android\avd\Nexus_5X_API_26_x86.avd
  Target: Google APIs (Google Inc.)
          Based on: Android 8.0 (Oreo) Tag/ABI: google_apis/x86
    Skin: nexus_5x
  Sdcard: 800M
Snapshot: no
```

Then can open the emulator with command:
```
c:\Users\YOUR_USER\AppData\Local\Android\sdk\tools\emulator -avd Nexus_5X_API_26_x86
```