<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\properties\Category;
use App\Models\properties\Size;
use App\Models\properties\Sort;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getAllProducts()
    {
        $products = Product::all();
        foreach ($products as $product) {
            $product->size = $product->sizes[0]->value;
            unset($product->sizes);
            $product->sort = $product->sorts[0]->value;
            unset($product->sorts);
            $product->category = $product->categories[0]->value;
            unset($product->categories);
        }
        return $products;
    }

    public function getFilters(): array
    {
        $sizes = Size::all(['id', 'value']);
        $sorts = Sort::all(['id', 'value']);
        $categories = Category::all(['id', 'value']);

//        foreach ($categories as $category) {
//            $category['model'] = true;
//        }
//        foreach ($sizes as $size) {
//            $size['model'] = true;
//        }

        $filterObject = array (
            'category' =>
                array (
                    'title' => 'Тип',
                    'items' => $categories
                ),
            'size' =>
                array (
                    'title' => 'Размер',
                    'items' => $sizes
                ),
            'sort' =>
                array (
                    'title' => 'Сорт',
                    'items' => $sorts
                ),
        );

        return $filterObject;
    }
}
