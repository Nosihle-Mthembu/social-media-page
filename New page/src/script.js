document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new bootstrap.Popover(popover)
    })

  function btn(){
    document.getElementsByClassName("container")[0].style.display = "none"
  }