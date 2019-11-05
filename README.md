# signal server for Virtual Talk



 #### origin from [ProjectRTC](https://github.com/pchab/ProjectRTC)

only change the href for android to resolve error in location : )

###### how to use
__In AndriodRTC__
- AndroidManifest.xml
 ```xml
 <intent-filter>
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="virtualtalk"/>
</intent-filter>
```
- RtcActivity.java
```java
 final Intent intent = getIntent();
 final String action = intent.getAction();
if (Intent.ACTION_VIEW.equals(action)) {
    final String urlId =intent.getData().getQueryParameter("id");
    callerId =urlId;
}
```