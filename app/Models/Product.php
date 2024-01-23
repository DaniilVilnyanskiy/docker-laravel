<?php

namespace App\Models;

use App\Models\properties\Category;
use App\Models\properties\Size;
use App\Models\properties\Sort;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'subtitle',
        'description',
//        'sizes',
//        'sort',
    ];

    public function sizes()
    {
        return $this->belongsToMany(Size::class, 'product_sizes');
    }

    public function sorts()
    {
        return $this->belongsToMany(Sort::class, 'product_sorts');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }
}
