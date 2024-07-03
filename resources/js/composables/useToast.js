import { reactive, provide } from 'vue';

let id = 1;

export default function useToast() {
    const state = reactive({
        toasts: []
    });

    function addToast(title, message, type = 'success', timeout = 3000) {
        const toast = { id: id++ , title, message, type};
        state.toasts.push(toast);

        setTimeout(() => {
            removeToast(toast.id);
        }, timeout);
    }

    function addSuccessToast(title, message, timeout = 3000){
        addToast(title, message, 'success', timeout);
    }

    function addErrorToast(title, message, timeout = 3000){
        addToast(title, message, 'error', timeout);
    }

    function addInfoToast(title, message, timeout = 3000){
        addToast(title, message, 'info', timeout);
    }

    function addWarningToast(title, message, timeout = 3000){
        addToast(title, message, 'warning', timeout);
    }

    function removeToast(id) {
        const index = state.toasts.findIndex(toast => toast.id === id);
        if (index !== -1){
            state.toasts.splice(index, 1);
        }
    }
    addSuccessToast('Welcome', 'This is a success toast message')
    addErrorToast('Error', 'This is a error toast message')
    addInfoToast('Info!', 'This is a info toast message')
    addWarningToast('Warning', 'This is a warning toast message')

    provide('toasts', state.toasts);
    provide('addSuccessToast', addSuccessToast);
    provide('addErrorToast', addErrorToast);
    provide('addInfoToast', addInfoToast);
    provide('addWarningToast', addWarningToast);
    provide('removeToast', removeToast);

}

