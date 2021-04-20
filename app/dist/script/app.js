Vue.component('counter', {
    template: `<div class="quantityCounter"><button @click="add();notifUp()">+</button><span>{{ result }}</span><button @click="sub();notifUp()">-</button></div>`,
    data() {
        return {
            result: 1
        }
    },
    methods: {
        add() {
            this.result += 1
        },
        sub() {
            if (this.result > 1) {
                this.result -= 1
            }
        },
        notifUp: function () {
            App.notifUpdate('Cart Updated')
        }
    }
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
        quantity: 1,
        notificationMessage: ''
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
                this.notificationMessage = '';
                notif.classList.remove('notif--open')
            })
        },
        preventMobileNavClicked: function () {
            preventNavbar();
        },
        notifUpdate: function (notifMessage) {
            
            notif.classList.add('notif--open');
            this.notificationMessage = notifMessage;
            setTimeout(() => {
                notif.classList.remove('notif--open')
                this.notificationMessage = ''
            }, 3000);
        }
    }
});
const notif = document.querySelector('#notif');
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