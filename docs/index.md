<a name="top"></a>
# Expresso v0.1.0

Expresso API Documentation

 - [Bitly](#Bitly)
   - [Redirect short URL](#Redirect-short-URL)
 - [Cuttly](#Cuttly)
   - [Redirect short URL](#Redirect-short-URL)
   - [Create short URL](#Create-short-URL)
 - [Devto](#Devto)
   - [Get articles with tag](#Get-articles-with-tag)
 - [Dictionary](#Dictionary)
   - [Lookup word in dictionary](#Lookup-word-in-dictionary)
 - [Ghost](#Ghost)
   - [Get list of tables (non-sqlite)](#Get-list-of-tables-(non-sqlite))
   - [Select * from table](#Select-*-from-table)
 - [Mailchimp](#Mailchimp)
   - [Add member to list](#Add-member-to-list)
 - [NoIP](#NoIP)
   - [Update IP address](#Update-IP-address)

___


# <a name='Bitly'></a> Bitly

## <a name='Redirect-short-URL'></a> Redirect short URL
[Back to top](#top)

```
GET /bitly/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Short code</p> |

### Examples
Example usage:

```curl
curl {url}/bitly/teedy01
```

### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Redirect |  | <p>Page will be redirected to the long URL.</p> |

### Error response

#### Error response - `Error 4xx`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| PageNotFound |  | <p>Page not found 404 Error</p> |

# <a name='Cuttly'></a> Cuttly

## <a name='Redirect-short-URL'></a> Redirect short URL
[Back to top](#top)

```
GET /cuttly/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Short code</p> |

### Examples
Example usage:

```curl
curl {url}/cuttly/teedy01
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Redirect |  | <p>Page will be redirected to the long URL.</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| PageNotFound |  | <p>Page not found 404 Error</p> |

## <a name='Create-short-URL'></a> Create short URL
[Back to top](#top)

```
POST /cuttly/new/:id/:long
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Short code</p> |
| long | `String` | <p>Long url</p> |

### Examples
Example usage:

```curl
curl {url}/cuttly/new/teedy01/https://teedy.myvnc.com
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Status-1 | `Number` | <p>The shortened link comes from the domain that shortens the link, i.e. the link has already been shortened.</p> |
| Status-2 | `Number` | <p>The entered link is not a link.</p> |
| Status-3 | `Number` | <p>The preferred link name is already taken.</p> |
| Status-4 | `Number` | <p>Invalid API key.</p> |
| Status-5 | `Number` | <p>The link has not passed the validation. Includes invalid characters.</p> |
| Status-6 | `Number` | <p>The link provided is from a blocked domain.</p> |
| Status-7 | `Number` | <p>OK the link has been shortened</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
{
   "status": "OK",
   "url": {
       "date": "15/03/21",
       "shortLink": "https://cutt.ly/teedy01",
       "fullLink": "https://teedy.myvnc.com",
       "title": "Teedy"
   }
}
```

# <a name='Devto'></a> Devto

## <a name='Get-articles-with-tag'></a> Get articles with tag
[Back to top](#top)

```
GET /devto/articles/tag/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Tag</p> |

### Examples
Example usage:

```curl
curl {url}/devto/articles/tag/javascript
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| JSON | `string[]` | <p>articles</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Empty | `string[]` |  |

# <a name='Dictionary'></a> Dictionary

## <a name='Lookup-word-in-dictionary'></a> Lookup word in dictionary
[Back to top](#top)

```
GET /dictionary/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>word to check</p> |

### Examples
Example usage:

```curl
curl {url}/dictionary/tribulation
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| word | `String` | <p>Word to check</p> |
| meaning | `String` | <p>Meaning of word</p> |

### Success response example

#### Success response example - `Success - Response:`

```json
{
  "word": "tribulation",
  "meaning": "A trying period or event"
}
```

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| message | `String` | <p>Error message</p> |

# <a name='Ghost'></a> Ghost

## <a name='Get-list-of-tables-(non-sqlite)'></a> Get list of tables (non-sqlite)
[Back to top](#top)

```
GET /ghost/table
```

### Examples
Example usage:

```curl
curl {url}/ghost/table
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| tables | `String[]` | <p>Table names</p> |

### Success response example

#### Success response example - `Success - Response:`

```json
{
  "tables": ["foo","bar"]
}
```

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| error | `String` | <p>400 Bad Request</p> |

## <a name='Select-*-from-table'></a> Select * from table
[Back to top](#top)

```
GET /ghost/table/:id
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Table</p> |

### Examples
Example usage:

```curl
curl {url}/ghost/table/foo
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| names | `String[]` | <p>Column names</p> |
| types | `String[]` | <p>Column types</p> |
| values | `[]` | <p>Column values</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| error | `String` | <p>400 Bad Request</p> |

### Error response example

#### Error response example - `Error - Response:`

```json
{
     "error": "no such table: foo"
}
```

# <a name='Mailchimp'></a> Mailchimp

## <a name='Add-member-to-list'></a> Add member to list
[Back to top](#top)

```
POST /mailchimp/add
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| firstName | `String` | <p>First name</p> |
| lastName | `String` | <p>Last name</p> |
| email | `String` | <p>Email</p> |

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Status | `String` | <p>200</p> |
| error_count | `Number` | <p>equals 0</p> |

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| Status | `String` | <p>200</p> |
| error_count | `Number` | <p>greater than 0</p> |
| errors | `Number` | <p>Error messages</p> |

# <a name='NoIP'></a> NoIP

## <a name='Update-IP-address'></a> Update IP address
[Back to top](#top)

```
GET /noip/:id/:ip
```

### Parameters - `Parameter`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>dynamic NoIP hostname</p> |
| ip | `String` | <p>IP address to which the hostname will be set</p> |

### Examples
Example usage:

```curl
curl {url}/noip/abc.myvnc.com/12.1.4.56
```

### Success response

#### Success response - `Success 200`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| status | `String` | <p>Enum: 'good IP_ADDRESS' 'nochg IP_ADDRESS'</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
good 12.1.4.56
```

### Error response

#### Error response - `Error 4xx`
| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| status | `String` | <p>Enum: 'nohost' 'badauth' 'badagent' '!donator' 'abuse' '911'</p> |

### Error response example

#### Error response example - `Error-Response:`

```json
nohost
```
