# Client/Server

Trivy has client/server mode. Trivy server has vulnerability database and Trivy client doesn't have to download vulnerability database. It is useful if you want to scan images or files at multiple locations and do not want to download the database at every location.

## Server
At first, you need to launch Trivy server. It downloads vulnerability database automatically and continue to fetch the latest DB in the background.
```
$ trivy server --listen localhost:8080
2019-12-12T15:17:06.551+0200    INFO    Need to update DB
2019-12-12T15:17:56.706+0200    INFO    Reopening DB...
2019-12-12T15:17:56.707+0200    INFO    Listening localhost:8080...
```

If you want to accept a connection from outside, you have to specify `0.0.0.0` or your ip address, not `localhost`.

```
$ trivy server --listen 0.0.0.0:8080
```

## Remote image scan
Then, specify the server address for `image` command.
```
$ trivy image --server http://localhost:8080 alpine:3.10
```
**Note**: It's important to specify the protocol (http or https).

<details>
<summary>Result</summary>

```
alpine:3.10 (alpine 3.10.2)
===========================
Total: 3 (UNKNOWN: 0, LOW: 1, MEDIUM: 2, HIGH: 0, CRITICAL: 0)

+---------+------------------+----------+-------------------+---------------+
| LIBRARY | VULNERABILITY ID | SEVERITY | INSTALLED VERSION | FIXED VERSION |
+---------+------------------+----------+-------------------+---------------+
| openssl | CVE-2019-1549    | MEDIUM   | 1.1.1c-r0         | 1.1.1d-r0     |
+         +------------------+          +                   +               +
|         | CVE-2019-1563    |          |                   |               |
+         +------------------+----------+                   +               +
|         | CVE-2019-1547    | LOW      |                   |               |
+---------+------------------+----------+-------------------+---------------+
```
</details>

## Remote scan of local filesystem
Also, there is a way to scan local file system:
```shell
$ trivy fs --server http://localhost:8080 --severity CRITICAL ./integration/testdata/fixtures/fs/pom/
```
**Note**: It's important to specify the protocol (http or https).
<details>
<summary>Result</summary>
pom.xml (pom)
=============
Total: 24 (CRITICAL: 24)

+---------------------------------------------+------------------+----------+-------------------+--------------------------------+---------------------------------------+
|                   LIBRARY                   | VULNERABILITY ID | SEVERITY | INSTALLED VERSION |         FIXED VERSION          |                 TITLE                 |
+---------------------------------------------+------------------+----------+-------------------+--------------------------------+---------------------------------------+
| com.fasterxml.jackson.core:jackson-databind | CVE-2017-17485   | CRITICAL | 2.9.1             | 2.8.11, 2.9.4                  | jackson-databind: Unsafe              |
|                                             |                  |          |                   |                                | deserialization due to                |
|                                             |                  |          |                   |                                | incomplete black list (incomplete     |
|                                             |                  |          |                   |                                | fix for CVE-2017-15095)...            |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2017-17485 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2018-11307   |          |                   | 2.7.9.4, 2.8.11.2, 2.9.6       | jackson-databind: Potential           |
|                                             |                  |          |                   |                                | information exfiltration with         |
|                                             |                  |          |                   |                                | default typing, serialization         |
|                                             |                  |          |                   |                                | gadget from MyBatis                   |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-11307 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2018-14718   |          |                   | 2.6.7.2, 2.9.7                 | jackson-databind: arbitrary code      |
|                                             |                  |          |                   |                                | execution in slf4j-ext class          |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-14718 |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2018-14719   |          |                   |                                | jackson-databind: arbitrary           |
|                                             |                  |          |                   |                                | code execution in blaze-ds-opt        |
|                                             |                  |          |                   |                                | and blaze-ds-core classes             |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-14719 |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2018-14720   |          |                   |                                | jackson-databind: exfiltration/XXE    |
|                                             |                  |          |                   |                                | in some JDK classes                   |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-14720 |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2018-14721   |          |                   |                                | jackson-databind: server-side request |
|                                             |                  |          |                   |                                | forgery (SSRF) in axis2-jaxws class   |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-14721 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2018-19360   |          |                   | 2.6.7.3, 2.7.9.5, 2.8.11.3,    | jackson-databind: improper            |
|                                             |                  |          |                   | 2.9.8                          | polymorphic deserialization           |
|                                             |                  |          |                   |                                | in axis2-transport-jms class          |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-19360 |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2018-19361   |          |                   |                                | jackson-databind: improper            |
|                                             |                  |          |                   |                                | polymorphic deserialization           |
|                                             |                  |          |                   |                                | in openjpa class                      |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-19361 |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2018-19362   |          |                   |                                | jackson-databind: improper            |
|                                             |                  |          |                   |                                | polymorphic deserialization           |
|                                             |                  |          |                   |                                | in jboss-common-core class            |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-19362 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2018-7489    |          |                   | 2.7.9.3, 2.8.11.1, 2.9.5       | jackson-databind: incomplete fix      |
|                                             |                  |          |                   |                                | for CVE-2017-7525 permits unsafe      |
|                                             |                  |          |                   |                                | serialization via c3p0 libraries      |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2018-7489  |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-14379   |          |                   | 2.7.9.6, 2.8.11.4, 2.9.9.2     | jackson-databind: default             |
|                                             |                  |          |                   |                                | typing mishandling leading            |
|                                             |                  |          |                   |                                | to remote code execution              |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-14379 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-14540   |          |                   | 2.9.10                         | jackson-databind:                     |
|                                             |                  |          |                   |                                | Serialization gadgets in              |
|                                             |                  |          |                   |                                | com.zaxxer.hikari.HikariConfig        |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-14540 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-14892   |          |                   | 2.6.7.3, 2.8.11.5, 2.9.10      | jackson-databind: Serialization       |
|                                             |                  |          |                   |                                | gadgets in classes of the             |
|                                             |                  |          |                   |                                | commons-configuration package         |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-14892 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-14893   |          |                   | 2.8.11.5, 2.9.10               | jackson-databind:                     |
|                                             |                  |          |                   |                                | Serialization gadgets in              |
|                                             |                  |          |                   |                                | classes of the xalan package          |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-14893 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-16335   |          |                   | 2.9.10                         | jackson-databind:                     |
|                                             |                  |          |                   |                                | Serialization gadgets in              |
|                                             |                  |          |                   |                                | com.zaxxer.hikari.HikariDataSource    |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-16335 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-16942   |          |                   | 2.9.10.1                       | jackson-databind:                     |
|                                             |                  |          |                   |                                | Serialization gadgets in              |
|                                             |                  |          |                   |                                | org.apache.commons.dbcp.datasources.* |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-16942 |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2019-16943   |          |                   |                                | jackson-databind:                     |
|                                             |                  |          |                   |                                | Serialization gadgets in              |
|                                             |                  |          |                   |                                | com.p6spy.engine.spy.P6DataSource     |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-16943 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-17267   |          |                   | 2.9.10                         | jackson-databind: Serialization       |
|                                             |                  |          |                   |                                | gadgets in classes of                 |
|                                             |                  |          |                   |                                | the ehcache package                   |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-17267 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-17531   |          |                   | 2.9.10.1                       | jackson-databind:                     |
|                                             |                  |          |                   |                                | Serialization gadgets in              |
|                                             |                  |          |                   |                                | org.apache.log4j.receivers.db.*       |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-17531 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2019-20330   |          |                   | 2.8.11.5, 2.9.10.2             | jackson-databind: lacks               |
|                                             |                  |          |                   |                                | certain net.sf.ehcache blocking       |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2019-20330 |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2020-8840    |          |                   | 2.7.9.7, 2.8.11.5, 2.9.10.3    | jackson-databind: Lacks certain       |
|                                             |                  |          |                   |                                | xbean-reflect/JNDI blocking           |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2020-8840  |
+                                             +------------------+          +                   +--------------------------------+---------------------------------------+
|                                             | CVE-2020-9546    |          |                   | 2.7.9.7, 2.8.11.6, 2.9.10.4    | jackson-databind: Serialization       |
|                                             |                  |          |                   |                                | gadgets in shaded-hikari-config       |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2020-9546  |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2020-9547    |          |                   |                                | jackson-databind: Serialization       |
|                                             |                  |          |                   |                                | gadgets in ibatis-sqlmap              |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2020-9547  |
+                                             +------------------+          +                   +                                +---------------------------------------+
|                                             | CVE-2020-9548    |          |                   |                                | jackson-databind: Serialization       |
|                                             |                  |          |                   |                                | gadgets in anteros-core               |
|                                             |                  |          |                   |                                | -->avd.aquasec.com/nvd/cve-2020-9548  |
+---------------------------------------------+------------------+----------+-------------------+--------------------------------+---------------------------------------+
</details>

## Authentication

```
$ trivy server --listen localhost:8080 --token dummy
```

```
$ trivy image --server http://localhost:8080 --token dummy alpine:3.10
```

## Architecture

![architecture](../../../imgs/client-server.png)

