lumberjack
==========

Cut down those URLs.

###Status###
Currently working but the UI isn't fully functional yet. I've not implemented the UI to show you the shortened code.

To test this you can do the following in terminal:

```curl -X POST http://lumberjackapp.herokuapp.com -i -F"url=http://google.com"```

You will receive a response back like this:

```HTTP/1.1 201 Created 
Content-Type: text/html;charset=utf-8
Date: Mon, 10 Dec 2012 05:05:26 GMT
Location: http://lumberjackapp.herokuapp.com/h_LsPA
Server: WEBrick/1.3.1 (Ruby/1.9.2/2011-07-09)
Content-Length: 0
Connection: keep-alive```

The Location header contains your short code, if you visit that URL it will redirect you to the URL you provided in the cURL POST.

You can see a screenshot below using [hurl.it](http://hurl.it)
![screenshot](http://i.imgur.com/OV0eX.png)