window.pricing = function () {
    return {
        yearlyBilling: false,

        pricing: [
            { id: 0, pageviews: '10K', monthAmount: 8},
            { id: 1, pageviews: '50K', monthAmount: 12},
            { id: 2, pageviews: '100K', monthAmount: 16},
            { id: 3, pageviews: '500k', monthAmount: 24},
            { id: 4, pageviews: '1M', monthAmount: 36},
        ],

        selected: 2,

        get selectedItem() {
            return this.pricing.filter(set => set.id == this.selected)[0];
        },


        get amount() {
            return this.yearlyBilling ? (12*this.selectedItem.monthAmount)*0.75 : this.selectedItem.monthAmount;
        },

        progress() {
            for (let e of document.querySelectorAll('.slider[type="range"].slider-progress')) {
                e.style.setProperty('--value', e.value);
                e.style.setProperty('--min', e.min == '' ? '0' : e.min);
                e.style.setProperty('--max', e.max == '' ? '100' : e.max);
                e.addEventListener('input', () => e.style.setProperty('--value', e.value));
            }
        }
    }
}