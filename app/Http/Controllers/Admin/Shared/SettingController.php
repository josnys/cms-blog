<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Shared;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Shared\SettingRequest;
use Domains\Media\Actions\ManipulateImgeAction;
use Domains\Shared\Models\Setting;
use Domains\Shared\Services\SettingsService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function __construct(
        protected readonly string $base_path = 'Admin/Setting'
    ){}

    public function index() : Response | RedirectResponse
    {
        $setting = Setting::find(1);
        
        if(!$setting) {
            return redirect()->route('admin.setting.create');
        }

        return Inertia::render("{$this->base_path}/Index", ['info' => [
            'setting' => (new SettingsService())->getById(1),
        ]]);
    }

    public function create() : Response
    {
        $setting = Setting::find(1);
        return Inertia::render("{$this->base_path}/Form", ['info' => [
            'setting' => $setting ? (new SettingsService())->getById($setting->id) : [],
        ]]);
    }

    public function store(SettingRequest $request) : RedirectResponse
    {
        $input = $request->payload()->toArray();

        $setting = Setting::find(1) ?? new Setting();

        $_logo = $setting ? $setting->logo : null;

        if(isset($input['logo'])){
            $logo = (new ManipulateImgeAction())
            ->storeImageAndCreateThumbnail($input['logo'], 'resources')
            ->getData();
            
            $_logo = $logo['name'] ?? $_logo;
        }

        $input['logo'] = $_logo;
        
        $setting->name = $input['name'];
        $setting->logo = $input['logo'];
        $setting->slogan = $input['slogan'];
        $setting->description = $input['description'];
        $setting->email = $input['email'];
        $setting->phone = $input['phone'];
        $setting->socials = $input['socials'];
        $setting->address = $input['address'];
        $setting->save();

        return redirect()->route('admin.setting.index')->with('success', 'Settings Updated Successfully.');
    }
}
