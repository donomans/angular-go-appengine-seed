package goseed

import (
	"appengine"
	"appengine/user"
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	context := appengine.NewContext(r)
	currentuser := user.Current(context)
	var url string = "/"
	if currentuser == nil {
		url, _ = user.LoginURL(context, "/")

	} else {
		url, _ = user.LogoutURL(context, "/")
	}

	if err := indexTemplate.Execute(w, struct{ Title, LoginUrl string }{Title: "Angular Go Seed", LoginUrl: url}); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

var indexTemplate = template.Must(template.New("index.html").ParseFiles("app/index.html"))
