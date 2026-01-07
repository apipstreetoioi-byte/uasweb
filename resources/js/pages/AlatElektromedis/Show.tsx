import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

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

export default function Show({ alat }: Props) {
    return (
        <>
            <Head title={`Detail ${alat.nama_alat}`} />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Detail Alat Elektromedis</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <strong>Kode Alat:</strong> {alat.kode_alat}
                        </div>
                        <div>
                            <strong>Nama Alat:</strong> {alat.nama_alat}
                        </div>
                        <div>
                            <strong>Jenis Alat:</strong> {alat.jenis_alat}
                        </div>
                        <div>
                            <strong>Lokasi:</strong> {alat.lokasi}
                        </div>
                        <div>
                            <strong>Status:</strong>
                            <span className={`ml-2 px-2 py-1 rounded ${alat.status === 'aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {alat.status}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Link href={`/alat-elektromedis/${alat.id}/edit`}>
                        <Button variant="outline" className="mr-2">Edit</Button>
                    </Link>
                    <Link href="/alat-elektromedis">
                        <Button variant="secondary">Kembali</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}