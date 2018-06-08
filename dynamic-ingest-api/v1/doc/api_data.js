define({ "api": [  {    "type": "get",    "url": "/accounts/:account_id/videos/:video_id/upload-urls/:source_name",    "title": "Get S3 URLs",    "name": "Get_S3_URLs",    "group": "Ingest",    "version": "1.0.0",    "description": "<p>Get temporary S3 URLs to upload source files for ingestion into Video Cloud. See <a href=\"https://support.brightcove.com/source-file-upload-api-dynamic-ingest\">Source File Upload</a> for more information. <strong>NOTE that before you ingest a new video, you must first make a <a href=\"https://brightcovelearning.github.io/Brightcove-API-References/cms-api/v1/doc/index.html#api-videoGroup-Create_Video\">Create Video request</a>.</strong></p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "video_id",            "description": "<p>Video Cloud video ID; if this is a new video ingest, the ID will be the one returned by the <em>Create Video</em> request</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "source_name",            "description": "<p>the video source filename - <strong>the name should not contain any URL-reserved characters such as ?, &amp;, # or spaces</strong></p>"          }        ]      },      "examples": [        {          "title": "Get S3 URLS Example:",          "content": "https://ingest.api.brightcove.com/v1/accounts/57838016001/videos/67909129001/upload-urls/greatblueheron.mp4",          "type": "json"        }      ]    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "bucket",            "description": "<p>the S3 bucket name</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "object_key",            "description": "<p>the access key used for authenticating the upload request (used for multipart uploads)</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "access_key_id",            "description": "<p>the access key used for authenticating the upload request (used for multipart uploads)</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "secret_access_key",            "description": "<p>the secret access key used for authenticating the upload request (used for multipart uploads)</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "session_token",            "description": "<p>the secret access key used for authenticating the upload request (used for multipart uploads)</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "SignedUrl",            "description": "<p>this is a shorthand S3 url that you can PUT your source file(s) to if you have relatively small videos and are not implementing multipart upload</p>"          },          {            "group": "200",            "type": "String",            "optional": false,            "field": "ApiRequestUrl",            "description": "<p>this is the URL you will include in your Dynamic Ingest POST request for the Master url or url for the image/text_tracks assets</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n\t    \"bucket\": \"ingestion-upload-production\",\n\t    \"object_key\": \"57838016001/67909129001/194ed2d1-cd57-420d-9139-58ed655ba70f/greatblueheron.mp4\",\n\t    \"access_key_id\": \"ASIAI6IWBNY3QPOKC55A\",\n\t    \"secret_access_key\": \"DXzr3VYcpMpH1Qg5JZ3qFRw3gRFdi3jAoxiUQtR0\",\n\t    \"session_token\": \"FQoDYXdzEI///////////wEaDNnYCOYcjTzSp6seNyKMA5pkuYrKv2+oSVDI/I4xLqGg5Mc7ORWqTT1Bn72VdzqvxkbA8i/2xaOKNSYzF/ceyTAb3Bp43jah4s/mn2MqkurXPL0dfP0KzVOUAsg7Xdt9JIstycn6mhp0rhf6Qm0Rq7GGXiCchb1KF4TV33fNKZSq8+/4oGKK55LfW+lqWF8a+24Pk5x2aEeSUCFSWIHEkAyj2rBzmIYR9TyjJhe1hE8eoTZKvovz5o5S86mEr4apg77ibrMUyYHTbDTvGVr9NVmNwXQR4vbaKKzhpL6CII0RZ9PHApGbLkg78w5EWGM2MLmTfIjvkq+WWztG2DybSCjmx7c+za6rNMKDgouKTvkHnJbqqsmTlPuhFmzIkIF3e6cYZLHl3q8ku7dk46YJPWK0BwZaNxjfMyIWM93BNPQBwLJlwSMaYZsWadSjWOyBn/w/p/BtP/haKQGYMVcOFrYKdnjY5SeGTruOmHdfRKnPQAtmoB5aroxnD3d7maFdnc/2/FZoybnp1nrw9uyGa8yiPHpqCENFCm3T3iiuof/NBQ==\",\n\t    \"signed_url\": \"https://ingestion-upload-production.s3.amazonaws.com/57838016001/67909129001/194ed2d1-cd57-420d-9139-58ed655ba70f/greatblueheron.mp4?AWSAccessKeyId=AKIAJZKRHWB4FUFMCPPA&Expires=1505829422&Signature=PKxh8SqQVtxVONt41tLSh6WSvnk%3D\",\n\t    \"api_request_url\": \"https://ingestion-upload-production.s3.amazonaws.com/57838016001/67909129001/194ed2d1-cd57-420d-9139-58ed655ba70f/greatblueheron.mp4\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your client credentials were correct for the access token</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "RATE_LIMIT_EXCEEDED",            "description": "<p>429: Dynamic Ingest job not created. Reduce the number of concurrent jobs for this account before trying again. This error has been logged</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "INTERNAL_ERROR",            "description": "<p>500: Internal error, please try again later</p>"          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        },        {          "title": "404 Not Found",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"NO_SUCH_VIDEO\",\n        \"message\": \"Unable to find the referenced video.\"\n    }\n]",          "type": "json"        },        {          "title": "403 Forbidden",          "content": "HTTP/1.1 403 Forbidden\n[\n    {\n        \"error_code\": \"UNAUTHORIZED\",\n        \"message\": \"Unable to authorize request.\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/ingest.js",    "groupTitle": "Ingest"  },  {    "type": "post",    "url": "/accounts/:account_id/videos/:video_id/ingest-requests",    "title": "Ingest Media Asset",    "name": "Ingest_Media_Asset",    "group": "Ingest",    "version": "1.0.0",    "description": "<p>Uploads a video, images, and/or text track (WebVTT files) and adds them to your media library. <strong>NOTE that before you ingest a new video, you must first make a <a href=\"https://brightcovelearning.github.io/Brightcove-API-References/cms-api/v1/doc/index.html#api-videoGroup-Create_Video\">Create Video request</a>.</strong></p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "account_id",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "video_id",            "description": "<p>Video Cloud video ID; if this is a new video ingest, the ID will be the one returned by the <em>Create Video</em> request</p>"          }        ],        "Request Body Fields": [          {            "group": "Request Body Fields",            "type": "Object",            "optional": true,            "field": "master",            "description": "<p>the video master to be ingested</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": true,            "field": "master.url",            "description": "<p>URL for the video source; required except for re-transcoding where a digital master has been archived, or you are adding images or text tracks to an existing video</p>"          },          {            "group": "Request Body Fields",            "type": "Boolean",            "optional": true,            "field": "master.use_archived_master",            "description": "<p>For retranscode requests, will use the archived master if set to <code>true</code>; if set to <code>false</code>, you must also include the <code>url</code> for the source video</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": true,            "field": "profile",            "description": "<p>ingest profile to use for transcoding; if absent, account default profile will be used</p>"          },          {            "group": "Request Body Fields",            "type": "Object[]",            "optional": true,            "field": "text_tracks",            "description": "<p>array of text_track maps</p>"          },          {            "group": "Request Body Fields",            "type": "Object[]",            "optional": true,            "field": "audio_tracks",            "description": "<p>array of audio track objects <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": true,            "field": "audio_tracks.language",            "description": "<p>Language code for the muxed in audio from the subtags in <a href=\"http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry\">http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry</a> (default can be set for the account by contacting Brightcove Support) <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "Boolean",            "optional": true,            "field": "audio_tracks.merge_with_existing",            "defaultValue": "false",            "description": "<p>whether to replace existing audio tracks or add the new ones (currently only <code>false</code> is supported) <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "Object[]",            "optional": true,            "field": "audio_tracks.masters",            "description": "<p>array of audio track objects <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": true,            "field": "audio_tracks.masters.url",            "description": "<p>URL for the audio file <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": true,            "field": "audio_tracks.masters.language",            "description": "<p>Language code for the audio track from the subtags in <a href=\"http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry\">http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry</a> (default can be set for the account by contacting Brightcove Support) <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "String",            "allowedValues": [              "\"main\"",              "\"alternate\"",              "\"commentary\"",              "\"dub\"",              "\"descriptive\""            ],            "optional": true,            "field": "audio_tracks.masters.variant",            "description": "<p>the type of audio track (default can be set for the account by contacting Brightcove Support) <strong>Dynanic Delivery only</strong></p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": false,            "field": "text_tracks.url",            "description": "<p>URL for a WebVTT file</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": false,            "field": "text_tracks.srclang",            "description": "<p>ISO 639 2-letter (alpha-2) language code for the text tracks</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "allowedValues": [              "\"captions\"",              "\"subtitles\"",              "\"chapters\"",              "\"metadata\""            ],            "optional": true,            "field": "text_tracks.kind",            "defaultValue": "captions",            "description": "<p>how the vtt file is meant to be used</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": true,            "field": "text_tracks.label",            "description": "<p>user-readable title</p>"          },          {            "group": "Request Body Fields",            "type": "Boolean",            "optional": true,            "field": "text_tracks.default",            "description": "<p>sets the default language for captions/subtitles</p>"          },          {            "group": "Request Body Fields",            "type": "Object",            "optional": true,            "field": "poster",            "description": "<p>the video master to be ingested</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": false,            "field": "poster.url",            "description": "<p>URL for the video poster image</p>"          },          {            "group": "Request Body Fields",            "type": "Number",            "optional": true,            "field": "poster.height",            "description": "<p>pixel height of the image</p>"          },          {            "group": "Request Body Fields",            "type": "Number",            "optional": true,            "field": "poster.width",            "description": "<p>pixel width of the image</p>"          },          {            "group": "Request Body Fields",            "type": "Object",            "optional": true,            "field": "thumbnail",            "description": "<p>the video master to be ingested</p>"          },          {            "group": "Request Body Fields",            "type": "String",            "optional": false,            "field": "thumbnail.url",            "description": "<p>URL for the video thumbnail image</p>"          },          {            "group": "Request Body Fields",            "type": "Number",            "optional": true,            "field": "thumbnail.height",            "description": "<p>pixel height of the image</p>"          },          {            "group": "Request Body Fields",            "type": "Number",            "optional": true,            "field": "thumbnail.width",            "description": "<p>pixel width of the image</p>"          },          {            "group": "Request Body Fields",            "type": "Boolean",            "optional": true,            "field": "capture-images",            "description": "<p>whether poster and thumbnail should be captured during transcoding; defaults to <code>true</code> if the the profile has image renditions, <code>false</code> if it does not</p>"          },          {            "group": "Request Body Fields",            "type": "String[]",            "optional": true,            "field": "callbacks",            "description": "<p>array of URLs that <a href=\"https://support.brightcove.com/node/17939\">notifications</a> should be sent to</p>"          }        ]      },      "examples": [        {          "title": "Ingest Request Example:",          "content": "{\n  \"master\": {\n      \"url\": \"http://host/master.mp4\"\n  },\n  \"profile\": \"multi-platform-extended-static\",\n  \"audio_tracks\": {\n        \"merge_with_existing\": false,\n        \"masters\": [\n            {\n                \"url\": \"http://learning-services-media.brightcove.com/audio/celtic_lullaby.m4a\",\n                \"language\": \"en\",\n                \"variant\": \"alternate\"\n            },\n            {\n                \"url\": \"http://learning-services-media.brightcove.com/audio/audio1.m4a\",\n                \"language\": \"en\",\n                \"variant\": \"commentary\"\n            }\n        ]\n    },\n  \"poster\": {\n        \"url\": \"http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-poster.png\",\n        \"width\": 640,\n        \"height\": 360\n    },\n    \"thumbnail\": {\n        \"url\": \"http://learning-services-media.brightcove.com/images/for_video/Water-In-Motion-thumbnail.png\",\n        \"width\": 160,\n        \"height\": 90\n    },\n    \"capture-images\": false,\n    \"text_tracks\": [\n        {\n            \"url\": \"http://learning-services-media.brightcove.com/captions/for_video/Water-in-Motion.vtt\",\n            \"srclang\": \"en\",\n            \"kind\": \"captions\",\n            \"label\": \"EN\",\n            \"default\": true\n        }\n    ],\n    \"callbacks\": [\n        \"http://solutions.brightcove.com/bcls/di-api/di-callbacks.php\"\n    ]\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "200": [          {            "group": "200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>job id for the request</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200 OK\n{\n   \"id\":\"c6926dcf-0978-4085-8afc-e578ccfbf742\"\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNAUTHORIZED",            "description": "<p>401: Authentication failed; check to make sure your client credentials were correct for the access token</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "RESOURCE_NOT_FOUND",            "description": "<p>404: The api couldn't find the resource you requested</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "PROFILE",            "description": "<p>400: Unable to find profile by name</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "NOT_SUBMITTED",            "description": "<p>400: Unable to submit job, please try again later</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "NO_SUCH_VIDEO",            "description": "<p>400: Unable to find the referenced video</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "NO_SOURCE",            "description": "<p>400: Unable to find a source to use</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "CDN_CREDENTIALS",            "description": "<p>400: Unable to fetch CDN credentials</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "BAD_CALLBACKS",            "description": "<p>400: Callbacks were not in expected format</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "DYNAMIC_DELIVERY_NOT_ALLOWED",            "description": "<p>403: This account is not enabled for Dynamic Delivery, but a Dynamic Delivery profile was specified.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "CONTEXT_AWARE_ENCODING_NOT_ALLOWED",            "description": "<p>403: This account is not enabled for Context Aware Encoding, but a Context Aware Encoding profile was specified.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "MALFORMED_SOURCE_URL",            "description": "<p>422: source url is malformed.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "BAD_PROTOCOL_SOURCE_URL",            "description": "<p>422: source url uses a unsupported protocol.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "EXCEED_MAXIMUM_VTT_SOURCES",            "description": "<p>422: vtt sources exceed the maximum size.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "INVALID_VTT_KIND",            "description": "<p>422: vtt kind is invalid.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "CONSTRAINT_VIOLATION",            "description": "<p>422: capture-image is not allowed if an image source is provided.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "UNPROCESSABLE_ENTITY",            "description": "<p>422: request data contains some unprocessable entity.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "BAD_REQUEST",            "description": "<p>400: Unable to parse request body.</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "RATE_LIMIT_EXCEEDED",            "description": "<p>429: Dynamic Ingest job not created. Reduce the number of concurrent jobs for this account before trying again. This error has been logged</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "CDN_CONFIGS",            "description": "<p>Unable to fetch CDN credentials</p>"          },          {            "group": "Error 4xx",            "type": "json",            "optional": false,            "field": "AMBIGUOUS_REQUEST",            "description": "<p>400 Both a master url and use_archived_master were set in the request.</p>"          }        ],        "Error 5xx": [          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "SUBMISSION_FAILURE",            "description": "<p>500: Unable to submit job please try again later.</p>"          },          {            "group": "Error 5xx",            "type": "json",            "optional": false,            "field": "INTERNAL_ERROR",            "description": "<p>500: Internal error, please try again later</p>"          }        ]      },      "examples": [        {          "title": "404 Error Response",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"RESOURCE_NOT_FOUND\"\n    }\n]",          "type": "json"        },        {          "title": "400 PROFILE",          "content": "HTTP/1.1 400 Bad Request\n[\n    {\n        \"error_code\": \"PROFILE\",\n        \"message\": \"Unable to find profile by name.\"\n    }\n]",          "type": "json"        },        {          "title": "404 Not Found",          "content": "HTTP/1.1 404 Not Found\n[\n    {\n        \"error_code\": \"NO_SUCH_VIDEO\",\n        \"message\": \"Unable to find the referenced video.\"\n    }\n]",          "type": "json"        },        {          "title": "403 Forbidden",          "content": "HTTP/1.1 403 Forbidden\n[\n    {\n        \"error_code\": \"UNAUTHORIZED\",\n        \"message\": \"Unable to authorize request.\"\n    }\n]",          "type": "json"        },        {          "title": "400 Bad Request",          "content": "HTTP/1.1 403 Bad Request\n[\n    {\n        \"error_code\": \"BAD_REQUEST\",\n        \"message\": \"Unable to parse request body.\"\n    }\n]",          "type": "json"        },        {          "title": "422 CONSTRAINT_VIOLATION",          "content": "HTTP/1.1 422 Unprocessable Entity\n[\n    {\n        \"error_code\": \"CONSTRAINT_VIOLATION\",\n        \"message\": \"capture-image is not allowed if an image source is provided.\"\n    }\n]",          "type": "json"        },        {          "title": "400 AMBIGUOUS_REQUEST",          "content": "HTTP/1.1 400 Bad Request\n[\n    {\n        \"error_code\": \"AMBIGUOUS_REQUEST\",\n        \"message\": \"Both a master url and use_archived_master were set in the request.\"\n    }\n]",          "type": "json"        },        {          "title": "422 TYPE_VIOLATION",          "content": "HTTP/1.1 422 Unprocessable Entity\n[\n    {\n        \"error_code\": \"TYPE_VIOLATION\",\n        \"message\": \".text_tracks.kind must be of type String\"\n    }\n]",          "type": "json"        }      ]    },    "filename": "v1/src/ingest.js",    "groupTitle": "Ingest"  }] });
