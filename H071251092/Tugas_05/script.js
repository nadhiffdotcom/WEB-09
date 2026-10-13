
"use strict";

// ========================================
// API
// ========================================

const API_URL = "https://jsonplaceholder.typicode.com";

// ========================================
// ELEMEN HTML
// ========================================

const memberList = document.getElementById("member-list");
const memberStatus = document.getElementById("member-status");
const taskHeading = document.getElementById("task-heading");
const taskStatus = document.getElementById("task-status");
const taskList = document.getElementById("task-list");
const progress = document.getElementById("progress");
const progressBar = document.getElementById("progress-bar");
const searchInput = document.getElementById("search-input");
const noMatch = document.getElementById("no-match");
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const saveButton = document.getElementById("save-button");
const formMessage = document.getElementById("form-message");
const notification = document.getElementById("notification");

// ========================================
// STATE APLIKASI
// ========================================

let members = [];
let tasks = [];
let selectedMember = null;
let notificationTimer = null;
let requestNumber = 0;

// ========================================
// F1: MENGAMBIL DATA ANGGOTA
// ========================================

async function ambilAnggota() {
  memberStatus.textContent = "Memuat anggota...";
  memberStatus.className = "mb-3 text-xs text-slate-500";

  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error("Gagal memuat data anggota.");
    }

    members = await response.json();
    memberList.innerHTML = "";

    members.forEach((member, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.dataset.memberId = member.id;
      button.className =
        "member-button flex w-full items-center rounded-lg px-2 py-2 text-left text-sm transition hover:bg-slate-100";

      const nomor = document.createElement("span");
      nomor.className =
        "mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-medium text-slate-500";
      nomor.textContent = String(index + 1).padStart(2, "0");

      const nama = document.createElement("span");
      nama.className = "min-w-0 break-words";
      nama.textContent = member.name;

      button.appendChild(nomor);
      button.appendChild(nama);

      button.addEventListener("click", () => {
        pilihAnggota(member);
      });

      memberList.appendChild(button);
    });

    memberStatus.textContent = "";

    if (members.length === 0) {
      memberStatus.textContent = "Tidak ada anggota.";
    }
  } catch (error) {
    memberStatus.textContent =
      error.message || "Gagal memuat anggota.";
    memberStatus.className = "mb-3 text-xs text-red-600";
  }
}

// ========================================
// F2: MEMILIH ANGGOTA
// ========================================

async function pilihAnggota(member) {
  selectedMember = member;
  const currentRequest = ++requestNumber;

  document.querySelectorAll(".member-button").forEach((button) => {
    button.classList.remove("bg-blue-50", "text-blue-700");
    button.classList.add("text-slate-800");
  });

  const selectedButton = document.querySelector(
    `[data-member-id="${member.id}"]`
  );

  if (selectedButton) {
    selectedButton.classList.add("bg-blue-50", "text-blue-700");
    selectedButton.classList.remove("text-slate-800");
  }

  taskHeading.textContent = `Tugas ${member.name}`;
  taskList.innerHTML = "";
  noMatch.classList.add("hidden");

  searchInput.value = "";
  taskTitle.value = "";

  formMessage.textContent = "";
  formMessage.classList.add("hidden");

  notification.textContent = "";
  notification.classList.add("hidden");
  clearTimeout(notificationTimer);

  tasks = [];

  taskStatus.textContent = "Memuat tugas...";
  taskStatus.className =
    "px-4 pt-3 pb-2 text-sm text-slate-500 sm:px-5";

  progress.textContent = "Memuat progres...";
  progressBar.style.width = "0%";

  try {
    const response = await fetch(
      `${API_URL}/todos?userId=${member.id}`
    );

    if (!response.ok) {
      throw new Error("Gagal memuat tugas anggota.");
    }

    const data = await response.json();

    if (currentRequest !== requestNumber) {
      return;
    }

    tasks = data;
    tampilkanTugas();
  } catch (error) {
    if (currentRequest !== requestNumber) {
      return;
    }

    tasks = [];
    taskList.innerHTML = "";

    taskStatus.textContent =
      error.message || "Terjadi kesalahan saat memuat tugas.";
    taskStatus.className =
      "px-4 pt-3 pb-2 text-sm text-red-600 sm:px-5";

    progress.textContent = "Progres tidak dapat dimuat.";
    progressBar.style.width = "0%";
  }
}

// ========================================
// MENAMPILKAN TUGAS
// ========================================

function tampilkanTugas() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    taskList.appendChild(buatElemenTugas(task));
  });

  taskStatus.textContent = "";
  taskStatus.className = "hidden";

  perbaruiProgress();
  filterTugas();
}

// ========================================
// MEMBUAT ELEMEN TUGAS
// ========================================

function buatElemenTugas(task) {
  const wrapper = document.createElement("div");
  wrapper.className = "task-item flex items-start gap-3 py-3";

  const statusCircle = document.createElement("div");
  statusCircle.className =
    "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border";

  const title = document.createElement("span");
  title.className = "task-title min-w-0 flex-1 break-words text-sm";
  title.textContent = task.title;

  const actions = document.createElement("div");
  actions.className =
    "flex shrink-0 flex-wrap items-center justify-end gap-1";

  function perbaruiTampilanSelesai() {
    statusCircle.innerHTML = "";
    statusCircle.classList.remove("border-slate-300", "bg-white");
    statusCircle.classList.add("border-emerald-500", "bg-emerald-500");

    const check = document.createElement("span");
    check.textContent = "✓";
    check.className = "text-[10px] font-bold text-white";
    statusCircle.appendChild(check);

    title.classList.add("line-through", "text-slate-400");
  }

  if (task.completed) {
    perbaruiTampilanSelesai();
  } else {
    statusCircle.classList.add("border-slate-300", "bg-white");

    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.textContent = "Tandai selesai";
    completeButton.className =
      "rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-emerald-50 hover:text-emerald-700";

    completeButton.addEventListener("click", () => {
      task.completed = true;
      perbaruiTampilanSelesai();
      completeButton.remove();
      perbaruiProgress();
    });

    actions.appendChild(completeButton);
  }

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Hapus";
  deleteButton.className =
    "rounded-md px-2 py-1 text-xs text-slate-500 hover:bg-red-50 hover:text-red-600";

  deleteButton.addEventListener("click", () => {
    const index = tasks.indexOf(task);

    if (index !== -1) {
      tasks.splice(index, 1);
    }

    wrapper.remove();
    perbaruiProgress();
    filterTugas();
  });

  actions.appendChild(deleteButton);

  wrapper.appendChild(statusCircle);
  wrapper.appendChild(title);
  wrapper.appendChild(actions);

  return wrapper;
}

// ========================================
// MEMPERBARUI PROGRESS
// ========================================

function perbaruiProgress() {
  const selesai = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

  progress.textContent = `${selesai} dari ${total} tugas selesai`;

  const percentage = total > 0 ? (selesai / total) * 100 : 0;
  progressBar.style.width = `${percentage}%`;
}

// ========================================
// F3: PENCARIAN TUGAS
// ========================================

function filterTugas() {
  const keyword = searchInput.value.trim().toLowerCase();
  const items = taskList.querySelectorAll(".task-item");
  let jumlahCocok = 0;

  items.forEach((item) => {
    const title = item.querySelector(".task-title");
    const judul = title ? title.textContent.toLowerCase() : "";
    const cocok = judul.includes(keyword);

    item.classList.toggle("hidden", !cocok);

    if (cocok) {
      jumlahCocok++;
    }
  });

if (keyword !== "" && jumlahCocok === 0) {    
  noMatch.classList.remove("hidden");
  } else {
    noMatch.classList.add("hidden");
  }
}

searchInput.addEventListener("input", filterTugas);

// ========================================
// F4: SIMULASI MENYIMPAN TUGAS
// ========================================

function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sudahAda = tasks.some(
        (task) =>
          task.title.trim().toLowerCase() ===
          judul.trim().toLowerCase()
      );

      if (sudahAda) {
        reject(new Error("Tugas dengan judul tersebut sudah ada."));
        return;
      }

      resolve({
        title: judul,
        completed: false
      });
    }, 1000);
  });
}

// ========================================
// NOTIFIKASI BERHASIL
// ========================================

function tampilkanNotifikasi(pesan) {
  clearTimeout(notificationTimer);

  notification.textContent = pesan;
  notification.className =
    "mt-1 text-xs font-medium text-emerald-600";
  notification.classList.remove("hidden");

  notificationTimer = setTimeout(() => {
    notification.textContent = "";
    notification.classList.add("hidden");
  }, 3000);
}

// ========================================
// F4: FORM TAMBAH TUGAS
// ========================================

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formMessage.textContent = "";
  formMessage.classList.add("hidden");

  notification.textContent = "";
  notification.classList.add("hidden");
  clearTimeout(notificationTimer);

  if (!selectedMember) {
    formMessage.textContent = "Pilih anggota terlebih dahulu.";
    formMessage.className = "mt-1 text-xs text-red-600";
    formMessage.classList.remove("hidden");
    return;
  }

  const judul = taskTitle.value.trim();

  if (judul.length === 0) {
    formMessage.textContent = "Judul tugas tidak boleh kosong.";
    formMessage.className = "mt-1 text-xs text-red-600";
    formMessage.classList.remove("hidden");
    return;
  }

  if (judul.length < 5) {
    formMessage.textContent =
      "Judul terlalu pendek, minimal 5 karakter.";
    formMessage.className = "mt-1 text-xs text-red-600";
    formMessage.classList.remove("hidden");
    return;
  }

  saveButton.textContent = "Menyimpan...";
  saveButton.disabled = true;

  try {
    const tugasBaru = await simpanTugas(judul);

    tasks.push(tugasBaru);
    taskList.appendChild(buatElemenTugas(tugasBaru));

    perbaruiProgress();
    taskTitle.value = "";

    tampilkanNotifikasi("Tugas berhasil ditambahkan.");
    filterTugas();
  } catch (error) {
    formMessage.textContent =
      error.message || "Tugas gagal disimpan.";
    formMessage.className = "mt-1 text-xs text-red-600";
    formMessage.classList.remove("hidden");
  } finally {
    saveButton.textContent = "Simpan";
    saveButton.disabled = false;
  }
});

// ========================================
// JALANKAN APLIKASI
// ========================================

ambilAnggota();
