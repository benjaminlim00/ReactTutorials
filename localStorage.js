var siteData = {
  siteName: "my website",
  siteDescription: "another js site"
}


localStorage.setItem('siteData', JSON.stringify(siteData));


// here we retrieve the data
localData = JSON.parse(localStorage.getItem("siteData"));

console.log(localData);
