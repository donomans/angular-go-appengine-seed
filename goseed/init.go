package goseed

import (
	"html/template"
	"net/http"
)

func init() {
	http.HandleFunc("/", index)
}

func index(w http.ResponseWriter, r *http.Request) {
	if err := indexTemplate.Execute(w, "Angular Go Seed"); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

var indexTemplate = template.Must(template.New("index.html").ParseFiles("app/index.html"))
