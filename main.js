const coworkingsData = [
  {
    id: 1, name: "Теплый Офис", address: "ул. Ленина, 25, Чита", price: "200 ₽/час",
    description: "Уютное пространство с живыми растениями и натуральным светом. Идеально для фрилансеров и небольших команд.",
    worktime: "Пн-Пт: 09:00-21:00, Сб-Вс: 10:00-20:00", amenities: "Wi-Fi, кухня, зона отдыха, парковка",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
  },
  {
    id: 2, name: "Природа Work", address: "ул. Амурская, 10, Чита", price: "300 ₽/час",
    description: "Вид на городской парк, тишина и зона отдыха с зелёной стеной.",
    worktime: "Пн-Вс: 08:00-22:00", amenities: "Wi-Fi, веранда, кофе-поинт, шкафчики",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  },
  {
    id: 3, name: "GreenHub", address: "ул. Бабушкина, 42, Чита", price: "250 ₽/час",
    description: "Эко-коворкинг с террасой и фито-лампами. Проводятся воркшопы.",
    worktime: "Пн-Пт: 09:00-20:00, Сб: 10:00-18:00", amenities: "Wi-Fi, терраса, конференц-зона, вегетарианский буфет",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 4, name: "Чита Коворкинг", address: "ул. Бутина, 15, Чита", price: "180 ₽/час",
    description: "Для стартапов и фрилансеров, дружелюбная атмосфера, есть переговорные комнаты.",
    worktime: "Пн-Вс: 09:00-23:00", amenities: "Wi-Fi, переговорки, кулер, принтер",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63ifEczy9cZ4ivrfV6mXmn8V2hojeo2wV1g&s"
  },
  {
    id: 5, name: "Забайкальский Коворкинг", address: "проспект Фадеева, 1, Чита", price: "220 ₽/час",
    description: "Просторный зал с панорамными окнами, столы-трансформеры, живой уголок.",
    worktime: "Пн-Вс: 08:00-20:00", amenities: "Wi-Fi, зона для детей, кухня, лаунж",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&fit=crop"
  },
  {
    id: 6, name: "WoodSpace", address: "ул. Лазо, 54, Чита", price: "270 ₽/час",
    description: "Интерьер из натурального дерева, тихий центр, подходит для консалтинга.",
    worktime: "Пн-Пт: 10:00-19:00", amenities: "Wi-Fi, отдельные кабинеты, парковка, переговорная",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
  },
  {
    id: 7, name: "Coworking Park", address: "микрорайон Северный, 8, Чита", price: "190 ₽/час",
    description: "Рядом с парком, много света, есть терраса и велопарковка.",
    worktime: "Пн-Вс: 09:00-21:00", amenities: "Wi-Fi, велопарковка, кофе, зона для медитации",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop"
  },
  {
    id: 8, name: "Тихий Сад", address: "ул. Новобульварная, 12, Чита", price: "240 ₽/час",
    description: "Коворкинг в здании с внутренним двориком, где можно работать на свежем воздухе.",
    worktime: "Пн-Сб: 10:00-22:00, Вс выходной", amenities: "Wi-Fi, внутренний дворик, настольные игры, чайная станция",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWx1Rkjbrp2QZbfFMYWyh_A1KvN2FnhoI5zg&s"
  },
  {
    id: 9, name: "Эко-Платформа", address: "ул. Чкалова, 12, Чита", price: "210 ₽/час",
    description: "Новое пространство с панорамными окнами и зелёной крышей. Открыто в 2025 году.",
    worktime: "Пн-Вс: 09:00-21:00", amenities: "Wi-Fi, терраса на крыше, веган-кафе, зона для йоги",
    image: "https://bezramnoesteklo.ru/wp-content/uploads/2021/06/panoramnoe-osteklenie-krishi-doma-1.jpg"
  }
];

const USERS_KEY = "greenwork_users";
const CURRENT_USER_KEY = "greenwork_current_user";
const ADMIN_SESSION_KEY = "greenwork_admin_logged_in";

function initUsers() {
  let users = localStorage.getItem(USERS_KEY);
  if (!users) {
    const defaultUsers = [
      { id: 1, email: "user@example.com", password: "123456", firstName: "Иван", lastName: "Петров", phone: "+7 999 111-22-33", avatar: "", favorites: [] }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
}

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function isUserLoggedIn() {
  return sessionStorage.getItem(CURRENT_USER_KEY) !== null;
}

function getCurrentUser() {
  const userId = sessionStorage.getItem(CURRENT_USER_KEY);
  if (!userId) return null;
  const users = getUsers();
  return users.find(u => u.id == userId) || null;
}

function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    sessionStorage.setItem(CURRENT_USER_KEY, user.id);
    return true;
  }
  return false;
}

function registerUser(email, password, firstName, lastName, phone, avatarBase64 = "") {
  const users = getUsers();
  if (users.some(u => u.email === email)) return false;
  const newId = Date.now();
  const newUser = {
    id: newId,
    email, password, firstName, lastName, phone,
    avatar: avatarBase64,
    favorites: []
  };
  users.push(newUser);
  saveUsers(users);
  sessionStorage.setItem(CURRENT_USER_KEY, newId);
  return true;
}

function updateUserProfile(userId, updates) {
  const users = getUsers();
  const index = users.findIndex(u => u.id == userId);
  if (index !== -1) {
    Object.assign(users[index], updates);
    saveUsers(users);
  }
}

function toggleFavorite(userId, coworkingId) {
  const users = getUsers();
  const user = users.find(u => u.id == userId);
  if (!user) return false;
  const favIndex = user.favorites.indexOf(coworkingId);
  if (favIndex === -1) {
    user.favorites.push(coworkingId);
  } else {
    user.favorites.splice(favIndex, 1);
  }
  saveUsers(users);
  return true;
}

function isFavorite(userId, coworkingId) {
  const users = getUsers();
  const user = users.find(u => u.id == userId);
  return user ? user.favorites.includes(coworkingId) : false;
}

function isAdminLoggedIn() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function adminLogin(password) {
  if (password === "admin111") {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem(CURRENT_USER_KEY);
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  window.location.href = "index.html";
}

function getApplications() {
  const stored = localStorage.getItem("coworking_applications");
  return stored ? JSON.parse(stored) : [];
}

function saveApplications(apps) {
  localStorage.setItem("coworking_applications", JSON.stringify(apps));
}

function addApplication(name, phone, email, coworkingId, comment) {
  const apps = getApplications();
  const cowork = coworkingsData.find(c => c.id == coworkingId);
  const newApp = {
    id: Date.now(), name, phone, email,
    coworkingId: parseInt(coworkingId), coworkingName: cowork ? cowork.name : "Неизвестно",
    comment: comment || "", date: new Date().toLocaleString("ru-RU")
  };
  apps.push(newApp);
  saveApplications(apps);
  return true;
}

function populateCoworkingSelect(selectId) {
  const select = document.getElementById(selectId);
  if (!select) return;
  select.innerHTML = '<option value="">Выберите коворкинг</option>';
  coworkingsData.forEach(cw => {
    const option = document.createElement("option");
    option.value = cw.id;
    option.textContent = `${cw.name} (${cw.price})`;
    select.appendChild(option);
  });
}

function setupModal() {
  const modal = document.getElementById("feedbackModal");
  const floatingBtn = document.getElementById("floatingBtn");
  const closeModal = document.querySelector(".close-modal");
  const form = document.getElementById("feedbackForm");
  if (!modal || !floatingBtn) return;
  floatingBtn.onclick = () => {
    modal.style.display = "flex";
    populateCoworkingSelect("coworkingSelect");
  };
  if (closeModal) closeModal.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById("fbName").value.trim();
      const phone = document.getElementById("fbPhone").value.trim();
      const email = document.getElementById("fbEmail").value.trim();
      const coworkingId = document.getElementById("coworkingSelect").value;
      const comment = document.getElementById("fbComment").value;
      if (!name || !phone || !email || !coworkingId) {
        alert("Заполните имя, телефон, email и выберите коворкинг");
        return;
      }
      if (!email.includes("@")) { alert("Введите корректный email"); return; }
      addApplication(name, phone, email, coworkingId, comment);
      alert("Заявка отправлена! Спасибо.");
      form.reset();
      modal.style.display = "none";
    };
  }
}

function renderCoworkingsCards(containerId = "coworkingsGrid", showFavBtn = true) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  const user = getCurrentUser();
  const userId = user ? user.id : null;
  coworkingsData.forEach(cw => {
    const isFav = userId ? isFavorite(userId, cw.id) : false;
    const card = document.createElement("div");
    card.className = "cowork-card";
    card.innerHTML = `
      <div class="card-img" style="background-image: url('${cw.image}');"></div>
      <div class="card-content">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3>${cw.name}</h3>
          ${showFavBtn ? `<button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${cw.id}">♥</button>` : ''}
        </div>
        <div class="address">${cw.address}</div>
        <div class="worktime">${cw.worktime}</div>
        <div class="amenities">Удобства: ${cw.amenities}</div>
        <div class="price">${cw.price}</div>
        <p>${cw.description}</p>
        <button class="btn-outline request-btn" data-id="${cw.id}" style="margin-top: 12px;">Оставить заявку</button>
      </div>
    `;
    container.appendChild(card);
  });
  document.querySelectorAll(".request-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const coworkId = btn.getAttribute("data-id");
      const modal = document.getElementById("feedbackModal");
      if (modal) {
        populateCoworkingSelect("coworkingSelect");
        const select = document.getElementById("coworkingSelect");
        if (select) select.value = coworkId;
        modal.style.display = "flex";
      }
    });
  });
  document.querySelectorAll(".favorite-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const userCurr = getCurrentUser();
      if (!userCurr) {
        alert("Чтобы добавлять в избранное, войдите в профиль.");
        window.location.href = "login.html";
        return;
      }
      const coworkId = parseInt(btn.getAttribute("data-id"));
      toggleFavorite(userCurr.id, coworkId);
      const isNowFav = isFavorite(userCurr.id, coworkId);
      if (isNowFav) btn.classList.add("active");
      else btn.classList.remove("active");
    });
  });
}

function renderHomePreview() {
  const container = document.getElementById("homeCoworkingsPreview");
  if (!container) return;
  container.innerHTML = "";
  const preview = coworkingsData.slice(0, 3);
  const user = getCurrentUser();
  const userId = user ? user.id : null;
  preview.forEach(cw => {
    const isFav = userId ? isFavorite(userId, cw.id) : false;
    const card = document.createElement("div");
    card.className = "cowork-card";
    card.innerHTML = `
      <div class="card-img" style="background-image: url('${cw.image}');"></div>
      <div class="card-content">
        <div style="display: flex; justify-content: space-between;">
          <h3>${cw.name}</h3>
          <button class="favorite-btn ${isFav ? 'active' : ''}" data-id="${cw.id}">♥</button>
        </div>
        <div class="price">${cw.price}</div>
        <p>${cw.address}</p>
        <button class="btn-outline home-request-btn" data-id="${cw.id}">Заявка</button>
      </div>
    `;
    container.appendChild(card);
  });
  document.querySelectorAll("#homeCoworkingsPreview .favorite-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const userCurr = getCurrentUser();
      if (!userCurr) { alert("Войдите в профиль"); window.location.href = "login.html"; return; }
      const coworkId = parseInt(btn.getAttribute("data-id"));
      toggleFavorite(userCurr.id, coworkId);
      const isNowFav = isFavorite(userCurr.id, coworkId);
      if (isNowFav) btn.classList.add("active");
      else btn.classList.remove("active");
    });
  });
  document.querySelectorAll("#homeCoworkingsPreview .home-request-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const coworkId = btn.getAttribute("data-id");
      const modal = document.getElementById("feedbackModal");
      if (modal) {
        populateCoworkingSelect("coworkingSelect");
        const select = document.getElementById("coworkingSelect");
        if (select) select.value = coworkId;
        modal.style.display = "flex";
      }
    });
  });
}

function updateHeaderAuthLink() {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const existingAuthLink = document.getElementById("authNavLink");
  if (existingAuthLink) existingAuthLink.remove();
  const existingLogout = document.getElementById("logoutNavLink");
  if (existingLogout) existingLogout.remove();
  
  const authLink = document.createElement("a");
  authLink.id = "authNavLink";
  if (isAdminLoggedIn()) {
    authLink.href = "applications.html";
    authLink.textContent = "Заявки";
  } else if (isUserLoggedIn()) {
    authLink.href = "profile.html";
    authLink.textContent = "Профиль";
  } else {
    authLink.href = "login.html";
    authLink.textContent = "Вход";
  }
  nav.appendChild(authLink);
  
  if (isUserLoggedIn() || isAdminLoggedIn()) {
    const logoutLink = document.createElement("a");
    logoutLink.id = "logoutNavLink";
    logoutLink.href = "#";
    logoutLink.textContent = "Выйти";
    logoutLink.style.marginLeft = "10px";
    logoutLink.onclick = (e) => {
      e.preventDefault();
      logout();
    };
    nav.appendChild(logoutLink);
  }
}

function setActiveNav() {
  const path = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html") || (path === "index.html" && href === "index.html")) {
      link.classList.add("active");
    } else if (path === "" && href === "index.html") {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initUsers();
  setupModal();
  if (window.location.pathname.includes("coworkings.html")) {
    renderCoworkingsCards("coworkingsGrid", true);
  }
  if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "") {
    renderHomePreview();
  }
  updateHeaderAuthLink();
  setActiveNav();
});