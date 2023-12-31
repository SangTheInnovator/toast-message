function toast({title = '', message = '', type = 'info', duration = 3000}) 
{
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');

        // Auto remove toast
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle'
        };
        const icon = icons[type];
        const delay = (duration/ 1000).toFixed(2);

        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation =`slideInLeft ease .9s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

        
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Your computer was connected successfully!',
        type: 'success',
        duration: 5000
    })
}

function showInfoToast() {
    toast({
        title: 'Info',
        message: 'Click these buttons to connect',
        type: 'info',
        duration: 5000
    })
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Click the right color button!',
        type: 'warning',
        duration: 5000
    })
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Failed Connected!',
        type: 'error',
        duration: 5000
    })
}
