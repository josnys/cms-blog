<?php

declare(strict_types=1);

namespace Database\Seeders;

use Domains\Blog\Actions\CreateCategoryAction;
use Domains\Blog\Actions\CreateContentAction;
use Domains\Blog\Actions\CreatePageAction;
use Domains\Blog\Actions\CreateSubcategoryAction;
use Domains\Blog\Enums\PageDetailTypeEnum;
use Domains\Shared\Models\Setting;
use Domains\User\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Auth;

class SiteSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::find(1);
        Auth::login($user, true);

        $site = new Setting();
        $site->name = 'My Website';
        $site->logo = null;
        $site->slogan = 'The best in the cloud';
        $site->description = 'Comming Soon';
        $site->email = 'my@website.com';
        $site->phone = null;
        $site->socials = null;
        $site->address = null;
        $site->save();

        $categories = [
            ['name' => 'My First Category', 'show_main_menu' => true, 'status' => true],
            ['name' => 'My Second Category', 'show_main_menu' => false, 'status' => true],
        ];

        $subcategories = [
            ['name' => 'My First Sub Category 1', 'show_main_menu' => true, 'status' => true, 'category' => 1],
            ['name' => 'My First Sub Category 2', 'show_main_menu' => false, 'status' => true, 'category' => 1],
            ['name' => 'My Second Sub Category 1', 'show_main_menu' => true, 'status' => true, 'category' => 2],
            ['name' => 'My Second Sub Category 2', 'show_main_menu' => false, 'status' => true, 'category' => 2]
        ];

        $contents = [
            [
                'category' => 1, 
                'subcategory' => 1, 
                'cover' => null, 
                'title' => 'My First Block', 
                'intro' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra.',
                'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra. Interdum varius sit amet mattis vulputate enim nulla aliquet. Pulvinar elementum integer enim neque volutpat. Aliquet nibh praesent tristique magna. Convallis tellus id interdum velit laoreet id. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Eget dolor morbi non arcu. Nec sagittis aliquam malesuada bibendum. Elementum tempus egestas sed sed risus pretium. Et magnis dis parturient montes nascetur ridiculus mus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.',
                'status' => true,
                'published' => now()
            ],
            [
                'category' => 2,
                'subcategory' => 3, 
                'cover' => null, 
                'title' => 'My Second Block', 
                'intro' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra.',
                'body' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra. Interdum varius sit amet mattis vulputate enim nulla aliquet. Pulvinar elementum integer enim neque volutpat. Aliquet nibh praesent tristique magna. Convallis tellus id interdum velit laoreet id. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Eget dolor morbi non arcu. Nec sagittis aliquam malesuada bibendum. Elementum tempus egestas sed sed risus pretium. Et magnis dis parturient montes nascetur ridiculus mus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.',
                'status' => true,
                'published' => now()
            ]
        ];

        $pages = [
            [
                'name' => 'Home', 
                'show_main_menu' => true, 
                'access_by_id' => false, 
                'status' => true,
                'blocks' => [
                    [
                        'page_id' => 1,
                        'user_id' => 1,
                        'type' => PageDetailTypeEnum::CONTENT->value,
                        'block_id' => 1,
                        'order' => 1,
                        'is_active' => true,
                    ]
                ]
            ],
            [
                'name' => 'About Us', 
                'show_main_menu' => true, 
                'access_by_id' => true, 
                'status' => true,
                'blocks' => [
                    [
                        'page_id' => 2,
                        'user_id' => 1,
                        'type' => PageDetailTypeEnum::CONTENT->value,
                        'block_id' => 2,
                        'order' => 1,
                        'is_active' => true,
                    ]
                ]
            ]
        ];

        foreach($categories as $category) {
            $cat = (new CreateCategoryAction())->handle($category);
        }

        foreach($subcategories as $subcategory) {
            $subcat = (new CreateSubcategoryAction())->handle($subcategory);
        }

        foreach($contents as $content) {
            $cont = (new CreateContentAction())->handle($content);
        }

        foreach($pages as $page) {
            $pag = (new CreatePageAction())->handle($page);
            $pag->content()->sync($page['blocks']);
        }
    }
}
