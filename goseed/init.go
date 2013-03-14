package goseed

import (
	"net/http"
)

func init() {
	http.HandleFunc("/", index)
}
