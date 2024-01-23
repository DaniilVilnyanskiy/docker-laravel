<?php

namespace App\Models\properties;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sort extends Model
{
    use HasFactory;

    protected $fillable = [
        'value'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'product_sorts');
    }
}
