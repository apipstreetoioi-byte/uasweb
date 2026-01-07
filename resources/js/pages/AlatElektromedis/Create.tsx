import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        kode_alat: '',
        nama_alat: '',
        jenis_alat: '',
        lokasi: '',
        status: 'aktif',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/alat-elektromedis');
    };

    return (
        <>
            <Head title="Tambah Alat Elektromedis" />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Tambah Alat Elektromedis</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="kode_alat">Kode Alat</Label>
                        <Input
                            id="kode_alat"
                            value={data.kode_alat}
                            onChange={(e) => setData('kode_alat', e.target.value)}
                            required
                        />
                        {errors.kode_alat && <p className="text-red-500">{errors.kode_alat}</p>}
                    </div>
                    <div>
                        <Label htmlFor="nama_alat">Nama Alat</Label>
                        <Input
                            id="nama_alat"
                            value={data.nama_alat}
                            onChange={(e) => setData('nama_alat', e.target.value)}
                            required
                        />
                        {errors.nama_alat && <p className="text-red-500">{errors.nama_alat}</p>}
                    </div>
                    <div>
                        <Label htmlFor="jenis_alat">Jenis Alat</Label>
                        <Input
                            id="jenis_alat"
                            value={data.jenis_alat}
                            onChange={(e) => setData('jenis_alat', e.target.value)}
                            required
                        />
                        {errors.jenis_alat && <p className="text-red-500">{errors.jenis_alat}</p>}
                    </div>
                    <div>
                        <Label htmlFor="lokasi">Lokasi</Label>
                        <Input
                            id="lokasi"
                            value={data.lokasi}
                            onChange={(e) => setData('lokasi', e.target.value)}
                            required
                        />
                        {errors.lokasi && <p className="text-red-500">{errors.lokasi}</p>}
                    </div>
                    <div>
                        <Label htmlFor="status">Status</Label>
                        <Select value={data.status} onValueChange={(value) => setData('status', value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="aktif">Aktif</SelectItem>
                                <SelectItem value="nonaktif">Nonaktif</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.status && <p className="text-red-500">{errors.status}</p>}
                    </div>
                    <Button type="submit" disabled={processing}>
                        Simpan
                    </Button>
                </form>
            </div>
        </>
    );
}