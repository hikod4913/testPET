var sweetalert = document.querySelector('.sweetalert2');
    sweetalert.addEventListener('click', function () {
        // if (confirm('確定送出嗎?')) {
        //     Swal.fire({
        //         icon: 'success'
        //     })
        // }
        const Toast = Swal.fire({
            toast: true,
            text: "確定送出嗎",
            showCancelButton: true
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    },
                    icon: 'success'
                })
            }
        });
    });