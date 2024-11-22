# :notebook_with_decorative_cover: **Noteify Backend API**

Bu proje, Node.js ve Express.js kullanılarak oluşturulmuş bir **RESTful API**'dir. Kullanıcıların not ekleme, silme, güncelleme ve listeleme işlemlerini gerçekleştirmelerini sağlar. Ayrıca kullanıcı kimlik doğrulama işlemleri için **JWT** kullanılmıştır.

---

## :star: **Özellikler**
- **Kimlik Doğrulama**: Kullanıcıların oturum açması ve JWT ile kimlik doğrulaması yapılır.
- **Not Ekleme**: Giriş yapmış kullanıcılar, yeni bir not ekleyebilir.
- **Not Silme**: Kullanıcılar, kendi notlarını silebilir.
- **Not Güncelleme**: Kullanıcılar, mevcut notlarını düzenleyebilir.
- **Not Listeleme**: Kullanıcılar, kendi notlarını listeleyebilir.

---

## :wrench: **Teknolojiler**
- **Node.js**: Uygulama altyapısı
- **Express.js**: RESTful API geliştirme
- **JSON Web Tokens (JWT)**: Kullanıcı kimlik doğrulama
- **MongoDB**: Veri depolama

---

## :floppy_disk: **Kurulum**

1. Bu projeyi klonlayın:
    ```bash
    git clone https://github.com/bykeremx/noteify-backend.git
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. `.env` dosyasını oluşturun ve aşağıdaki bilgileri girin:
    ```env
    # Port ayarları
    PORT=8080

    # DB bağlantısı
    DB_URI=your_mongo_db_uri

    # JWT secret key
    JWT_SECRET=your_jwt_secret_key

    # JWT oturum süresi (örn: 1h -> bir saat)
    JWT_EXPIRES_IN=1h

    NODE_ENV=development
    ```

4. Sunucuyu çalıştırın:
    ```bash
    npm run dev
    ```

---

## :package: **`package.json` Açıklamaları**

`package.json` dosyanız, projenizin bağımlılıklarını ve bazı komutları yönetmek için kullanılır. Aşağıda önemli yerler açıklanmıştır:

### :gear: **Scripts**
- **`dev`**: Geliştirme ortamında uygulamanızı çalıştırmak için `npm run dev` komutunu kullanabilirsiniz. Bu komut, **`nodemon`** kullanarak uygulamanızı başlatır ve dosya değişikliklerini izler. Kodunuzda herhangi bir değişiklik yapıldığında sunucu otomatik olarak yeniden başlar.
    ```json
    "scripts": {
      "dev": "nodemon app.js"
    }
    ```

---

### :package: **Bağımlılıklar**

- **`bcrypt`**: Şifreleme işlemleri için kullanılır. Kullanıcı şifrelerini güvenli bir şekilde hashlemek için gereklidir.
- **`colors`**: Konsolda renkli metin yazdırmak için kullanılan kütüphanedir. Uygulamanızda konsola renkli yazılar yazdırmak için bu kütüphaneyi kullanabilirsiniz.
- **`dotenv`**: Çevresel değişkenlerinizi `.env` dosyasından almak için gereklidir. Bu, hassas bilgileri (JWT secret, DB bağlantı bilgileri gibi) korumanıza yardımcı olur.
- **`express`**: Express.js framework'ü, API'nizi oluşturmak için gerekli olan ana kütüphanedir.
- **`express-async-handler`**: Express'te asenkron hataları düzgün bir şekilde yönetmek için kullanılır.
- **`jsonwebtoken`**: JWT tokenleri oluşturmak ve doğrulamak için kullanılır.
- **`mongoose`**: MongoDB ile bağlantı kurmak için gerekli olan kütüphanedir.

---

### :construction_worker: **DevDependencies**
- **`nodemon`**: Geliştirme ortamında uygulamanızın dosyalarındaki değişiklikleri izler ve otomatik olarak yeniden başlatır.

---

## :scroll: **API Endpointleri**

| **HTTP Yöntemi** | **URL**                    | **Açıklama**                   | **Kimlik Doğrulama** |
|------------------|----------------------------|--------------------------------|----------------------|
| **POST**         | /api/auth/register         | Kullanıcı kaydı oluşturur      | Hayır                |
| **POST**         | /api/auth/login            | Kullanıcı giriş yapar         | Hayır                |
| **GET**          | /api/user/me               | Notları listeler               | Evet                 |
| **POST**         | /api/user/addnote          | Yeni not ekler                 | Evet                 |
| **PUT**          | /api/user/update/:id       | Notu günceller                 | Evet                 |
| **DELETE**       | /api/user/delete/:id       | Notu siler                     | Evet                 |

---

## :shield: **Kullanıcı Rolleri**
Şu anda tüm kullanıcılar aynı yetkilere sahiptir.

---

## :memo: **Geliştirme**
- Daha fazla özellik eklenebilir.
- Testler yazılarak güvenlik ve stabilite artırılabilir.

---

## :closed_lock_with_key: **Lisans**
Bu proje **MIT lisansı** altında lisanslanmıştır.

---
