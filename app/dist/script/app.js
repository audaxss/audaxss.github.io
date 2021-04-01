Vue.component('counter', {
    template: `<div class="quantityCounter"><button @click='add();notifUpdate();'>+</button><span>{{ result }}</span><button @click='sub();notifUpdate();'>-</button></div>`,
    data() {
        return {
            result: 1
        }
    },
    props: ['value'],
    methods: {
        emitResult() {
            this.$emit('input', this.result)
        },
        add() {
            this.result += 1
            this.emitResult()
        },
        sub() {
            if (this.result > 1) {
                this.result -= 1
            }
            this.emitResult()
        },
        notifUpdate() {
            const notif = document.querySelector('#notif');
                notif.classList.add('notif--open')

            setTimeout(() => {
                notif.classList.remove('notif--open')
            }, 2000);
        }
    }
})

Vue.component('notif', {
    template: ``
})

var App = new Vue({
    el: '#app',
    data: {
        navbarAnchors: 0,
        isCategoryClicked: false,
        isHomeClicked: true,
        isWishlistClicked: false,
        isBagClicked: false,
        isUserSettingsClicked: false,
        quantity: 1
    },
    methods: {
        navbarAnchorView: function (dataName) {

            let dataJSONPropertyName = Object.keys(this.$data);

            dataJSONPropertyName.forEach(propertyName => {
                let isPropertyEqual = propertyName == dataName;

                if (isPropertyEqual) {
                    this.$data[propertyName] = true;
                } else {
                    this.$data[propertyName] = false;
                }

                if (dataName == 'isCategoryClicked') {
                    this.isCategoryClicked = true;
                    this.navbarAnchors = 0;

                    anchors.forEach(anchor => {
                        anchor.classList.remove('active');
                    });

                    anchors[0].classList.add('active')
                }

                this.quantity = 1;
            })
        },
        preventMobileNavClicked: function () {
            preventNavbar();
        },
        notifUpdate: function () {
            const notif = document.querySelector('#notif');
                notif.classList.add('notif--open')

            setTimeout(() => {
                notif.classList.remove('notif--open')
            }, 2000);
        }
    }
});

// Anchor Mobile
const anchors = Array.from(document.querySelectorAll('#navbarAnchorsCategory > li'));

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function () {
        App.navbarAnchors = i;
    })
}

function preventNavbar() {
    const anchors = document.querySelectorAll('#navbarAnchorsCategory > li a');
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
        })
    })
}


const toggleActiveAnchor = (e) => {
    anchors.forEach(anchor => {
        anchor.classList.remove('active');
    });
    e.currentTarget.classList.add('active')
}

anchors.forEach(anchor => {
    anchor.addEventListener('click', toggleActiveAnchor)
});