import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface AlatElektromedis {
    id: number;
    kode_alat: string;
    nama_alat: string;
    jenis_alat: string;
    lokasi: string;
    status: 'aktif' | 'nonaktif';
}

interface Props {
    alat: AlatElektromedis[];
}

export default function Index({ alat }: Props) {
    const { delete: destroy } = useForm();

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus alat ini?')) {
            destroy(`/alat-elektromedis/${id}`);
        }
    };

    return (
        <>
            <Head title="Alat Elektromedis" />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Alat Elektromedis</h1>
                    <Link href="/alat-elektromedis/create">
                        <Button>Tambah Alat</Button>
                    </Link>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Kode Alat</TableHead>
                            <TableHead>Nama Alat</TableHead>
                            <TableHead>Jenis Alat</TableHead>
                            <TableHead>Lokasi</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {alat.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.kode_alat}</TableCell>
                                <TableCell>{item.nama_alat}</TableCell>
                                <TableCell>{item.jenis_alat}</TableCell>
                                <TableCell>{item.lokasi}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded ${item.status === 'aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Link href={`/alat-elektromedis/${item.id}`}>
                                        <Button variant="outline" size="sm" className="mr-2">Lihat</Button>
                                    </Link>
                                    <Link href={`/alat-elektromedis/${item.id}/edit`}>
                                        <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                                    </Link>
                                    <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}>Hapus</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}