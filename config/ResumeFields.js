export default {
    kontak: {
        name: 'Kontak',
        fields: [
            { name: 'name', label: 'Nama Lengkap', placeholder: 'Fitri Nurul Fadilah', required: true },
            { name: 'title', label: 'Posisi Pekerjaan Anda', placeholder: 'Akuntan' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'fitrinurul@gmail.com', required: true },
            { name: 'phone', label: 'Telepon', type: 'tel', placeholder: '+62 812 3456 7890' },
            { name: 'address', label: 'Alamat', placeholder: 'Jl. 123, Kota, Negara' },
            { name: 'linkedin', label: 'LinkedIn', placeholder: 'linkedin.com/in/fitrinurulfadilah' },
            { name: 'blogs', label: 'Blog', placeholder: 'blog.com/fitrinurulfadilah' },
            { name: 'twitter', label: 'Twitter', placeholder: 'twitter.com/fitrinurulfadilahdoe' },
            { name: 'portfolio', label: 'Portofolio', placeholder: 'johndoe.com' },
        ],
    },
    ringkasan: {
        name: 'Ringkasan',
        fields: [
            {
                name: 'ringkasan',
                label: 'Ringkasan',
                type: 'textarea',
                placeholder: 'Ringkasan singkat tentang keterampilan dan pengalaman Anda...',
                span: true,
                rows: 5,
            },
        ],
    },
    pendidikan: {
        name: 'Pendidikan',
        multiple: true,
        fields: [
            { name: 'degree', label: 'Program Studi', placeholder: 'Sarjana Ilmu Komputer' },
            { name: 'institution', label: 'Institusi', placeholder: 'Nama Universitas' },
            { name: 'start', label: 'Tanggal Mulai', type: 'month', placeholder: 'MM/YYYY' },
            { name: 'end', label: 'Tanggal Selesai', type: 'month', placeholder: 'MM/YYYY' },
            { name: 'location', label: 'Lokasi', placeholder: 'Kota, Negara' },
            { name: 'gpa', label: 'IPK', placeholder: '3.8/4.0' },
        ],
    },
    pengalaman: {
        name: 'Pengalaman',
        multiple: true,
        fields: [
            { name: 'role', label: 'Posisi / Jabatan', span: true, placeholder: 'Insinyur Perangkat Lunak' },
            { name: 'company', label: 'Tempat Kerja / Perusahaan', placeholder: 'Nama Perusahaan' },
            { name: 'location', label: 'Lokasi', placeholder: 'Kota, Negara' },
            { name: 'start', label: 'Tanggal Mulai', type: 'month', placeholder: 'MM/DD/YYYY' },
            { name: 'end', label: 'Tanggal Selesai', type: 'month', placeholder: 'MM/DD/YYYY' },
            {
                name: 'description',
                label: 'Tanggung Jawab',
                type: 'textarea',
                placeholder: 'Deskripsi singkat tentang tanggung jawab Anda...',
                span: true,
                rows: 4,
                multipoints: true,
            },
        ],
    },

    proyek: {
        name: 'Proyek',
        multiple: true,
        fields: [
            { name: 'title', label: 'Judul Proyek', placeholder: 'Nama Proyek' },
            { name: 'url', label: 'URL Proyek', placeholder: 'https://contoh.com/proyek' },
            {
                name: 'description',
                label: 'Deskripsikan Apa yang Anda Lakukan',
                type: 'textarea',
                placeholder: 'Deskripsikan proyek Anda secara singkat...',
                span: true,
                multipoints: true,
            },
        ],
    },

    keterampilan: {
        name: 'Keterampilan',
        fields: [
            {
                name: 'keterampilan',
                label: 'Keterampilan',
                type: 'textarea',
                placeholder: 'Daftar keterampilan Anda, pisahkan dengan koma...',
                span: true,
                rows: 3,
            },
        ],
    },

    sertifikat: {
        name: 'Sertifikat',
        multiple: true,
        fields: [
            { name: 'title', label: 'Judul Sertifikat', placeholder: 'Nama Sertifikat', span: true },
            { name: 'issuer', label: 'Organisasi Penerbit', placeholder: 'Nama Organisasi' },
            { name: 'date', label: 'Tanggal Penerbitan', type: 'month', placeholder: 'MM/DD/YYYY' },
        ],
    },

    bahasa: {
        name: 'Bahasa',
        multiple: true,
        fields: [
            { name: 'language', label: 'Bahasa', placeholder: 'Nama Bahasa' },
            {
                name: 'proficiency',
                label: 'Kemampuan',
                placeholder: 'misalnya, Lancar, Menengah, Pemula',
                type: 'select',
                options: [
                    {
                        value: 'Kemampuan Dasar',
                    },
                    {
                        value: 'Kemampuan Bekerja Terbatas',
                    },
                    {
                        value: 'Kemampuan Kerja Profesional',
                    },
                    {
                        value: 'Kemampuan Profesional Penuh',
                    },
                    {
                        value: 'Kemampuan Bilingual atau Bahasa Ibu',
                    },
                ],
            },
        ],
    },
};
