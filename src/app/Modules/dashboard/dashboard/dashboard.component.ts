import { Component } from '@angular/core';
import { AddItemComponent } from '../../items/add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  searchControl = new FormControl('');

 statCards = [
    {
      title: 'Total Items',
      value: 230,
      icon: 'fas fa-box',
      color: '#007bff'
    },
    {
      title: 'Items Issued',
      value: 120,
      icon: 'fas fa-share',
      color: '#22c55e'
    },
    {
      title: 'Low Stock',
      value: 15,
      icon: 'fas fa-exclamation-triangle',
      color: '#eab308'
    },
    {
      title: 'Out of Stock',
      value: 8,
      icon: 'fas fa-times',
      color: '#dc3545'
    }
  ];
  items = [
    { name: 'Laptop Dell XPS 13', category: 'Electronics', stock: 24 },
    { name: 'Office Chair', category: 'Furniture', stock: 5 },
    // Add more items here
  ];
    filteredItems = [...this.items];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  this.searchControl.valueChanges.subscribe((searchTerm: string | null) => {
    const lowerSearch = searchTerm?.toLowerCase() || '';

    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(lowerSearch) ||
      item.category.toLowerCase().includes(lowerSearch)
    );
  });
}


  openAddItemModal(): void {
  const dialogRef = this.dialog.open(AddItemComponent, {
    width: '500px',
    disableClose: true, // Optional
    data: {} // Optional, for passing data to the modal
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Refresh table or handle result
      console.log('Item added:', result);
    }
  });
}
}