async function returnAPI() {
   const response = await fetch('https://api.github.com/users/devjoaocamargo');
   const data = await response.json();

   return data;
}

function contructor() {
   returnAPI().then(item => {
      console.log(item);

      document.querySelector('.img_boll img').src = item.avatar_url;
      document.querySelector('.name_content .name').innerHTML = item.name;
      document.querySelector('.name_content .nickname').innerHTML = item.login;
      document.querySelector('.aboutme_content .aboutme_text').innerHTML = item.bio;
      document.querySelector('.follower_content .followers').innerHTML = item.followers;
      document.querySelector('.follower_content .followings').innerHTML = item.following;
   })
}

contructor()