define({  "name": "Playback API- STAGING TEST ONLY",  "version": "1.0.0",  "description": "Reference for the Brightcove Playback API, used for client-side access video and playlist information.<br><br><strong>Notes:</strong><ul><li>Customers using IP Restriction <strong>must</strong> use <code>https://edge-elb.api.brightcove.com/playback/v1</code> instead of the standard URL (Use <code>edge-elb.api...</code> vs the normal <code>edge.api...</code>). To learn how to restrict playback for all the players in an account, see the <a href=\"https://support.brightcove.com/node/8065\">Restricting Video Playback Using IP Address</a> document.<br><br></li><li>The raw API JSON response is not suitable with the player. Use the <code>player.catalog.transformVideoResponse()</code> function to convert each video object in the response into a format compatible with the player. This includes duration times and https image compatibility. For details, see the <a href=\"https://support.brightcove.com/node/18108\">Player Catalog</a> document.</li></ul>",  "title": "Playback API Reference",  "order": [    "videoGroup",    "Get_Videos",    "Get_Video_by_ID_or_Reference_ID",    "playlistGroup",    "Get_Playlists_by_ID_or_Reference_ID"  ],  "url": "https://edge.api.brightcove.com/playback/v1",  "sampleUrl": false,  "defaultVersion": "0.0.0",  "apidoc": "0.3.0",  "generator": {    "name": "apidoc",    "time": "2017-06-27T19:12:04.251Z",    "url": "http://apidocjs.com",    "version": "0.17.6"  }});
