# REST API Example

This is an example about REST API made with **Express.js** framework using **MySQL-database**.

So after you have added cloned the repo execute command **npm install** and make below changes.

## Connection to MySQL

In order to connect to MySQL with this application, you have to add below line to your **.env** 
<pre>
SQL_SERVER = 'mysql://netuser:netpass@localhost:3306/netdb'
</pre>
You have to add above, line because in file **database.js** there is this line 
<pre>
const connection = mysql.createPool(process.env.SQL_SERVER);
</pre>

## Environment variables

When the application is delpoyed to some cloud service, the best solution is to put the database configuration to environment variables. And most cloud services has that option. In order to use environment variables in your own computer, you can use .env file and also you have to add package **dotenv**.

## Webtoken 

In order to generate the **webtoken**, you will need a **secret key**. In this example, you can create the secret key like this 
<ol>
<li>Add to .env line MY_TOKEN= </li>
<li>Execute command node create_token</li>
<li>Paste the token to .env</li>

## .env example

The .env could be like this
<pre>
SQL_SERVER = 'mysql://netuser:netpass@localhost:3306/netdb'
MY_TOKEN=XHaDAgZP/U07PWFjYa60SuyTKn0jM/fVaLOXmOk/T/lqKTnpTZkqZxsE7SFd9XtGcrzoqp3mrfEq+f0ozaefbA==
</pre>
**NOTE** You should not add .env to public GitHub-repo, so add it to .gitignore


