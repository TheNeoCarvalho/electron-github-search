const client_id = "5c41c6afc48dde855925";
    const client_secret = "ce4e8c18c6d7fb8e5bf23d4debbecf9a3ffc318a";

      async function getUser() {
        let user = document.getElementById("name").value;
        let template = document.getElementById("repos");

        const profileResponse = await fetch(
          `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`
        );
        const profile = await profileResponse.json();
        
        template.innerHTML = `
          <div class="card" style="width: 12rem; margin-top: 50px; border: 0">
              <img class="card-img-top" width="80" src="${profile.avatar_url}" alt="Card image cap">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-center"><h4>${profile.name}</h4></li>
                  <li class="list-group-item text-center"><h4>Usuário: ${profile.login}</h4></li>
                    <li class="list-group-item">Repositórios: <span class="badge badge-success float-right">
                      ${profile.public_repos}
                    </span></li>
                    <li class="list-group-item">Seguidores: <span class="badge badge-primary float-right">
                      ${profile.followers}
                    </span></li>
                    <li class="list-group-item">Seguindo:<span class="badge badge-info float-right">
                      ${profile.following}
                    </span></li>
                </ul>
                <div class="card-body">
                <a href="${profile.html_url}" target="_blank" class="btn btn-warning btn-block">
                  Ver Perfil
                </a>
                </div>
            </div>
        `;
     }