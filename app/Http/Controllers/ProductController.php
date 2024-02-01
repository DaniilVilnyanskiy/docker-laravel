<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\properties\Category;
use App\Models\properties\Size;
use App\Models\properties\Sort;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getAllProducts(): Collection
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

        foreach ($categories as $category) {
            $category['model'] = false;
        }
        foreach ($sizes as $size) {
            $size['model'] = false;
        }
        foreach ($sorts as $sort) {
            $sort['model'] = false;
        }

        $filterObject = array (
            'category' =>
                array (
                    'title' => 'Тип',
                    'items' => $categories,
                ),
            'size' =>
                array (
                    'title' => 'Размер',
                    'items' => $sizes,
                ),
            'kind' =>
                array (
                    'title' => 'Сорт',
                    'items' => $sorts,
                ),
        );

        return $filterObject;
    }

    public function filterProducts(Request $request)
    {
        if ($request->hasAny(['category', 'kind', 'size']))
        {
            $filterCategory = explode('-', $request->query('category'));
            $filterKind = explode('-', $request->query('kind'));
            $filterSize = explode('-', $request->query('size'));

            $products = Product::query();

            // Filter by category
            if (!empty($filterCategory[0])) {
                $products->whereHas('categories', function ($query) use ($filterCategory) {
                    $query->whereIn('value', $filterCategory);
                });
            }

            // Filter by sort
            if (!empty($filterKind[0])) {
                $products->whereHas('sorts', function ($query) use ($filterKind) {
                    $query->whereIn('value', $filterKind);
                });
            }

            // Filter by size
            if (!empty($filterSize[0])) {
                $products->whereHas('sizes', function ($query) use ($filterSize) {
                    $query->whereIn('value', $filterSize);
                });
            }

            $filteredProducts = $products->get();

            return $filteredProducts;
        } else {
            return $this->getAllProducts();
        }
    }
}
