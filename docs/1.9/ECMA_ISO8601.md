The ISO 8601 standard provides a well-defined, unambiguous method of representing calendar dates and times in worldwide communications, especially to avoid misinterpreting numeric dates and times when such data is transferred between countries with different conventions for writing numeric dates and times.

The date time encoding is following extended [ECMA](https://tc39.es/ecma262/#sec-date-time-string-format) as UTC without daylight saving including:

|Date Time String Format|Example|
|------------|----------|
|YYYY| 2022|
|YYYY-MM| 2022-08|
|YYYY-MM-DD| 2022-08-21|
|YYYY-MM-DDTHH:mm:ss.sssZ|2022-08-21T17:03:10.565Z|
|YYYY-MM-DDTHH:mm:ss.sss[+/-]HH:mm|2022-08-21T17:03:10.565+06:00|

Expanded years (`YYYYY`) is _not_ supported by i3s. In case of deserialization errors clients must act as if timeEncoding was not present to allow backward compatability.

