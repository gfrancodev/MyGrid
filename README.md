<div align="center">
<h1>MyGrid</h1>

Gateway AWS IotCore to Mongodb.

<img align="center" width="60%" src="https://i.imgur.com/au2N991.jpg" alt="MyGrid"><br>

The Service captures any data payload sent directly by the Amazon AWS Iot Core and sends<br>
it to a database in Mongodb. The transferred data can be displayed in real time on the terminal.<br><br>
</div>
<H3>PERFORMANCE<H3>
  <img src="https://i.imgur.com/oozDx3O.jpg" alt="MyGrid"><br><br>
  
  The application proved to be promising, with low latency in the event loop, <br>
  low CPU and memory consumption at short, medium and long periods of use.<br><br>

<H3>ENVIRONMENT<H3>
  
For easy manipulation of the script, without necessarily having to make direct contact <br>
with the code when making a simple change. Everything that is necessary for proper functioning <br>
must be inserted in the other environment variables :<br><br>

Variable to define the time of receipt of data according to your zone:<br>
Forgot you time Zone? <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">View your time zone here.</a><br>
<pre>
TIMEZONE= Ex: America/Sao_Paulo
</pre><br><br>
  
Variable to set connection URI with Mongodb:
<pre>
MONGOO_URI= mongodb+srv://<User>:<Password>G@server.mongodb.net/<Database>?retryWrites=true&w=majority
</pre><br><br>

Variables to define the connection to AWS IOT CORE via MQTT server.<br>
Not familiar with AWS IOT CORE? <a href="https://aws.amazon.com/iot-core/">Meet here<a><br><br>

**NOTE:** Files referring to certificates and authentication keys must be informed by their storage url.<br>
<pre>
IOT_CORE_CERTPATH_URL= Ex:  https://www.exemple.com/certPath.txt 
IOT_CORE_KEYPATH_URL= Ex:  https://www.exemple.com/key.txt 
IOT_CORE_CATH_URL= Ex:  https://www.exemple.com/ca.txt 
IOT_CORE_HOST= Ex: Your Custom Endpoint
IOT_CORE_CLIENT_ID=  Ex: Your Unique ClientI dentifier 
IOT_CORE_TOPIC= Ex: Your Topic
</pre><br><br>
 

To monitor application status, PM2 is a service that allows us to do real-time monitoring.<br>
If you don't have an account, create a PM2 account right now <a href="https://id.keymetrics.io/api/oauth/register">Create an account here</a>. <br>
<pre>
PM2_PUBLIC_KEY= Your Public Key
PM2_SECRET_KEY= Your Secret Key
</pre>

<h3>Database Structure<h3>
Very simple and dynamic structure, which allows accepting any data source provided by AWS Iot Core.<br><br>
<pre>
{
  _id: Object Id
  logs: Object that accepts any parameter
  createdAt: Date Time ISO
 }
</pre><br><br>


<p align="center">Microservice powered by gfrancodev for Mygrid</p>
