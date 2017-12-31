define({ "api": [  {    "type": "get",    "url": "/accounts/:accountId/repos",    "title": "Get All Repositories",    "name": "Get_All_Repositories",    "group": "Repositories",    "version": "1.0.0",    "description": "<p>This will list the details for all repositories in an account.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          }        ]      }    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String[]",            "optional": false,            "field": "items",            "description": "<p>array of items</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "items.name",            "description": "<p>repo name</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "items.public_url",            "description": "<p>URL for the public player</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "items.repo_url",            "description": "<p>URL for the repository</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": " HTTP/1.1 200\n{\n  \"items\": [\n    {\n      \"name\": \"009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_af909574-1b95-4167-8f5a-81939725e843\",\n      \"public_url\": \"http://players.brightcove.net/1507807800001/009bc3a8-bb3f-4f94-ae9c8e9161dc0072_af909574-1b95-4167-8f5a-81939725e843\",\n      \"repo_url\": \"https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_af909574-1b95-4167-8f5a-81939725e843\"\n    },\n    {\n      \"name\": \"009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_default\",\n      \"public_url\": \"http://players.brightcove.net/1507807800001/009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_default\",\n      \"repo_url\": \"https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/009bc3a8-bb3f-4f94-ae9c-8e9161dc0072_default\"\n    }\n  ],\n    \"item_count\": 2\n}",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Repositories"  },  {    "type": "put",    "url": "/accounts/:accountId/repos/:repoName",    "title": "Create Repository",    "name": "Create_Repository",    "group": "Single_Repository",    "version": "1.0.0",    "description": "<p>This will create a single repository, if it does not exist. A response of 200 means the repository already existed. A response of 201 means repository was successfully created.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "repoName",            "description": "<p>The name of the repo for which to list details.</p>"          }        ]      }    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>repo name</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "public_url",            "description": "<p>URL for the public player</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "repo_url",            "description": "<p>URL for the repository</p>"          }        ]      },      "examples": [        {          "title": "Success Response 200:",          "content": " HTTP/1.1 200\n{\n  \"name\": \"existingRepo\",\n  \"public_url\": \"http://players.brightcove.net/1507807800001/existingRepo\",\n  \"repo_url\": \"https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/existingRepo\"\n}",          "type": "json"        },        {          "title": "Success Response 201:",          "content": " HTTP/1.1 201\n{\n  \"name\": \"newRepo\",\n  \"public_url\": \"http://players.brightcove.net/1507807800001/newRepo\",\n  \"repo_url\": \"https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/newRepo\"\n}",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Single_Repository"  },  {    "type": "delete",    "url": "/accounts/:accountId/repos/:repoName",    "title": "Delete Repository",    "name": "Delete_Repository",    "group": "Single_Repository",    "version": "1.0.0",    "description": "<p>This will delete a single repository.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "repoName",            "description": "<p>The name of the repo for which to list details.</p>"          }        ]      }    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>repo name</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": " HTTP/1.1 200\n{\n  Successfully deleted repo MyRepoName.\n}",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Single_Repository"  },  {    "type": "get",    "url": "/accounts/:accountId/repos/:repoName",    "title": "Get Repository",    "name": "Get_Repository",    "group": "Single_Repository",    "version": "1.0.0",    "description": "<p>This will retrieve the details for a single repository.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Content-Type",            "description": "<p>Content-Type: application/json</p>"          },          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "repoName",            "description": "<p>The name of the repo for which to list details.</p>"          }        ]      }    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>repo name</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "public_url",            "description": "<p>URL for the public player</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "repo_url",            "description": "<p>URL for the repository</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": " HTTP/1.1 200\n{\n  \"name\": \"firstRepo\",\n  \"public_url\": \"http://players.brightcove.net/1507807800001/firstRepo\",\n  \"repo_url\": \"https://repos.api.brightcove.com/v1/accounts/1507807800001/repos/firstRepo\"\n}",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Single_Repository"  },  {    "type": "put",    "url": "/accounts/:accountId/repos/:repoName/files/:destinationFilename",    "title": "Add/Update File",    "name": "Add_Update_File",    "group": "devsystemgroup",    "version": "1.0.0",    "description": "<p>This will add or update a file. The wanted file name is at the end of the endpoint. The <code>form contents</code> can be a file name, including relative path, or any string. If the file has a <code>.json</code> extension, it will be checked for valid JSON format.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "repoName",            "description": "<p>The name of the repo for which to list details.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "destinationFilename",            "description": "<p>The name of the file in the repo, it can be different than the name of locally read file.</p>"          }        ],        "Form Contents Value - Note: The value can be a file or a JSON string; If using a file it must be proceeded with the @ sign": [          {            "group": "Form Contents Value - Note: The value can be a file or a JSON string; If using a file it must be proceeded with the @ sign",            "type": "String",            "optional": false,            "field": "sourceFilename",            "description": "<p>Name of the file in the local folder, or a JSON string.</p>"          }        ]      },      "examples": [        {          "title": "curl Statement:",          "content": "curl \\\n  --user :email \\\n  --form contents=@sourceFilename \\\n  --request PUT \\\n  https://repos.api.brightcove.com/v1/accounts/:accountId/repos/:repoName/files/:destinationFilename",          "type": "curl"        }      ]    },    "success": {      "fields": {        "Response Fields": [          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Destination filename</p>"          },          {            "group": "Response Fields",            "type": "String",            "optional": false,            "field": "public_url",            "description": "<p>URL to use for referencing the file (contrasted to the repo URL)</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200\n{\n  \"name\": \"newname.txt\",\n  \"public_url\": \"http://players.brightcove.net/1507807800001/testRepo1/newname.txt\"\n}",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Manipulating Files",    "groupDescription": "<p>There is nothing in the Manipulating Files calls to the API to display the contents of a file, but you can do so in these two ways:</p> <ul>   <li>Browse the <code>public_url</code> that is part of the response in the file add/update</li>   <li>Use cURL to the file: <code>curl http://players.brightcove.net/:accountId/repos/:repoName/files/:filename</code></li> </ul>"  },  {    "type": "delete",    "url": "/accounts/:accountId/repos/:repoName/files/:filename",    "title": "Delete File",    "name": "Delete_File",    "group": "devsystemgroup",    "version": "1.0.0",    "description": "<p>Deletes a file in a repo.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "repoName",            "description": "<p>The name of the repo for which to list details.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "filename",            "description": "<p>The name of the file in the repo to delete.</p>"          }        ]      },      "examples": [        {          "title": "curl Statement:",          "content": "curl \\\n  --user :email \\\n  --request DELETE \\\n  https://repos.api.brightcove.com/v1/accounts/:accountId/repos/:repoName/files/:filename",          "type": "curl"        }      ]    },    "success": {      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200\n{\n  message: \"The call was successful.\"\n}",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Manipulating Files",    "groupDescription": "<p>There is nothing in the Manipulating Files calls to the API to display the contents of a file, but you can do so in these two ways:</p> <ul>   <li>Browse the <code>public_url</code> that is part of the response in the file add/update</li>   <li>Use cURL to the file: <code>curl http://players.brightcove.net/:accountId/repos/:repoName/files/:filename</code></li> </ul>"  },  {    "type": "get",    "url": "/accounts/:accountId/repos/:repoName/files",    "title": "List Files",    "name": "List_Files",    "group": "devsystemgroup",    "version": "1.0.0",    "description": "<p>Lists all the files in a repo.</p>",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>Authorization: Bearer access_token (see <a href=\"https://support.brightcove.com/getting-access-tokens\">Getting Access Tokens</a>)</p>"          }        ]      }    },    "parameter": {      "fields": {        "Path Parameters": [          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "accountId",            "description": "<p>Video Cloud account ID.</p>"          },          {            "group": "Path Parameters",            "type": "String",            "optional": false,            "field": "repoName",            "description": "<p>The name of the repo for which to list details.</p>"          }        ]      },      "examples": [        {          "title": "curl Statement:",          "content": "curl \\\n  --user :email \\\n  --request GET \\\n  https://repos.api.brightcove.com/v1/accounts/:accountId/repos/:repoName/files/",          "type": "curl"        }      ]    },    "success": {      "examples": [        {          "title": "Success Response:",          "content": "HTTP/1.1 200\n {\n   \"items\": [{\n     \"name\": \"newname.txt\",\n     \"public_url\": \"http://players.brightcove.net/1507807800001/testRepo1/newname.txt\"\n   }, {\n     \"name\": \"test.txt\",\n     \"public_url\": \"http://players.brightcove.net/1507807800001/testRepo1/test.txt\"\n   }],\n   \"item_count\": 2\n }",          "type": "json"        }      ]    },    "filename": "v1/src/delivery.js",    "groupTitle": "Manipulating Files",    "groupDescription": "<p>There is nothing in the Manipulating Files calls to the API to display the contents of a file, but you can do so in these two ways:</p> <ul>   <li>Browse the <code>public_url</code> that is part of the response in the file add/update</li>   <li>Use cURL to the file: <code>curl http://players.brightcove.net/:accountId/repos/:repoName/files/:filename</code></li> </ul>"  }] });
