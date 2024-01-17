<?php

namespace App\View\Components\Ui;

use Closure;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;

class Button extends Component
{
    public $text;
    public $class;

    /**
     * Create a new component instance.
     * @param string $text
     * @param string $class
     */
    public function __construct($text = "", $class = "")
    {
        $this->class = $class;
        $this->text = $text;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.ui.button');
    }
}
