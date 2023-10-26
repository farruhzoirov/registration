import {_config} from "./_config";

export default () => {
    try {
        if (window.location.href.includes('users')) {
            const tbody = document.querySelector('tbody');
            const pagination = document.querySelector('#pagination');
            let page = 1;
            let users = [];

            async function getUsersList() {
                let response = await fetch(_config.HOST + 'get-screenshots', {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                response = await response.json()

                users = response?.users;
                drawList();

                pagination.innerHTML = '';
                for (let i = 0; i < Math.ceil(users?.length / 50); i++) {
                    pagination.innerHTML += `
                <button data-paginator-button style="margin: 10px 2px; cursor: pointer">${ i + 1 }</button>
            `
                }

                document.querySelectorAll('[data-paginator-button]')?.forEach(button => {
                    button.addEventListener('click', e => {
                        page = +e.target.textContent;
                        drawList();
                    })
                })
            }

            function drawList() {
                tbody.innerHTML = '';
                users.slice((page - 1) * 50, page * 50)?.forEach(user => {
                    tbody.innerHTML += `
                        <tr>
                            <td>${ user.id }</td>
                            <td>${ user.name }</td>
                            <td style="cursor: pointer" onclick="window.navigator.clipboard.writeText(${user.phone})">
                                ${ user.phone }
                            </td>
                            <td>${ user.date }</td>
                            <td>
                                <a href="${ _config.HOST }${ user?.img }" target="_blank">
                                    <img width="50" src="${ _config.HOST }${ user?.img }" alt="">
                                </a>
                            </td>
                        </tr>
                    `
                })
            }

            getUsersList();
        }
    } catch (e) {
    }
}