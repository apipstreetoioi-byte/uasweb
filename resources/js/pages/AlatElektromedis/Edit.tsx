import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AlatElektromedis {
    id: number;
    kode_alat: string;
    nama_alat: string;
    jenis_alat: string;
    lokasi: string;
    status: 'aktif' | 'nonaktif';
}

interface Props {
    alat: AlatElektromedis;
}

export default function Edit({ alat }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        kode_alat: alat.kode_alat,
        nama_alat: alat.nama_alat,
        jenis_alat: alat.jenis_alat,
        lokasi: alat.lokasi,
        status: alat.status,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/alat-elektromedis/${alat.id}`);
    };

    return (
        <>
            <Head title="Edit Alat Elektromedis" />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Edit Alat Elektromedis</h1>
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
                        <Select value={data.status} onValueChange={(value) => setData('status', value as 'aktif' | 'nonaktif')}>
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
                        Update
                    </Button>
                </form>
            </div>
        </>
    );
}