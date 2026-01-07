<?php

namespace App\Http\Controllers;

use App\Models\AlatElektromedis;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlatElektromedisController extends Controller
{
    public function index()
    {
        $alat = AlatElektromedis::all();
        return Inertia::render('AlatElektromedis/Index', [
            'alat' => $alat,
        ]);
    }

    public function create()
    {
        return Inertia::render('AlatElektromedis/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'kode_alat' => 'required|string|max:50|unique:alat_elektromedis',
            'nama_alat' => 'required|string|max:100',
            'jenis_alat' => 'required|string|max:50',
            'lokasi' => 'required|string|max:100',
            'status' => 'required|in:aktif,nonaktif',
        ]);

        AlatElektromedis::create($request->all());

        return redirect()->route('alat-elektromedis.index')->with('success', 'Alat Elektromedis berhasil ditambahkan.');
    }

    public function show(AlatElektromedis $alatElektromedi)
    {
        return Inertia::render('AlatElektromedis/Show', [
            'alat' => $alatElektromedi,
        ]);
    }

    public function edit(AlatElektromedis $alatElektromedi)
    {
        return Inertia::render('AlatElektromedis/Edit', [
            'alat' => $alatElektromedi,
        ]);
    }

    public function update(Request $request, AlatElektromedis $alatElektromedi)
    {
        $request->validate([
            'kode_alat' => 'required|string|max:50|unique:alat_elektromedis,kode_alat,' . $alatElektromedi->id,
            'nama_alat' => 'required|string|max:100',
            'jenis_alat' => 'required|string|max:50',
            'lokasi' => 'required|string|max:100',
            'status' => 'required|in:aktif,nonaktif',
        ]);

        $alatElektromedi->update($request->all());

        return redirect()->route('alat-elektromedis.index')->with('success', 'Alat Elektromedis berhasil diperbarui.');
    }

    public function destroy(AlatElektromedis $alatElektromedi)
    {
        $alatElektromedi->delete();

        return redirect()->route('alat-elektromedis.index')->with('success', 'Alat Elektromedis berhasil dihapus.');
    }
}