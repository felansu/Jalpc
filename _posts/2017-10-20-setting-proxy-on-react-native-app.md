---
layout: post
title:  "How to set proxy on react native applications"
date:   2017-10-20
keywords: "react native,proxy"
categories: [React-Native]
tags: [React-Native, React, Proxy]
icon: icon-reactjs
      
---

It is common to work with proxy when working in a corporate environment.

To work with proxy and React, you must edit the `{root project}/android/gradle.properties` file:

```
systemProp.http.proxyHost=url.of.your.proxy.com
systemProp.http.proxyPort=port
systemProp.http.proxyUser=username
systemProp.http.proxyPassword=password

systemProp.https.proxyHost=url.of.your.proxy.com
systemProp.https.proxyPort=port
systemProp.https.proxyUser=username
systemProp.https.proxyPassword=password
```

You will also need to add the proxy to the nodejs context, in your terminal mac, linux or windows:
```
npm config set proxy http://user:password@proxy-url:port
npm config set https-proxy http://user:password@proxy-url:port
```

After that you can run react-native run-android and be happy :D