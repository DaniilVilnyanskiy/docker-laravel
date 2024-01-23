<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getAllProducts() {
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
}
