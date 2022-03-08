const LinksSocialMedia = {
  github:'JesusBeats'
  linkedin: 'cristian-jesus-3826b9227',
  youtube: 'UCr6AiGH2Zu1Kote2KXo9cPw',
  facebook: 'cristian.jesus.942',
  instagram: 'cwk.oxalabeats'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
