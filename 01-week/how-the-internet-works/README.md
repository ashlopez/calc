#How The Internet Works

###How to be a Browser

+ Given a domain name, a name server search is performed on the domain name to get the IP address:

		nslookup google.com

+ If there are several IP addresses associated with the domain, the name server chooses one at random and sends it to your browser.

+ Now, the root resource is requested. Port 80 is the standard HTTP port. To obtain the HTML code, we send an HTTP request (GET / HTTP/1.1) to the IP address. Press Return twice after typing in the below:

		telnet google.com 80
		GET / HTTP/1.1
		User-Agent: Lynx


##Other Terminal Commands

###Domain Registration Registry Search

View the public registration information for a given domain name:

	whois generalassemb.ly

###Name Server Search
	
View all of the name server entries for a domain name (or subdomain+domain) by using dig. (A - IP address to route to. MX - Mail exchange server where to route emails.)

	dig generalassemb.ly any

