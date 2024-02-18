// Fungsi untuk menetapkan nilai ke Local Storage
export function setLocalStorageItem(value) {
  console.log(value);
  try {
    value.forEach(item => {
      for (const key in item) {
        localStorage.setItem(key, JSON.stringify(item[key]));
      }
    });
    // value.map((item) => localStorage.setItem(item.key, item.value));

    // localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Gagal menetapkan nilai di Local Storage:`, error);
  }
}

// Fungsi untuk mendapatkan nilai dari Local Storage
export function getLocalStorageItem(key) {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      // console.warn(`Tidak ada nilai yang terkait dengan kunci ${key} di Local Storage.`);
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Gagal mendapatkan nilai ${key} dari Local Storage:`, error);
    return null;
  }
}

export function removeLocalStorageItem(value) {
  try {
    value.map((item) => localStorage.removeItem(item));
  } catch (error) {
    console.error(`Gagal menghapus nilai dari Local Storage:`, error);
  }
}
