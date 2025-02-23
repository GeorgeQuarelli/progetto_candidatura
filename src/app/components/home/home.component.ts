import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';
import { ApiService } from '../../services/api.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, UserDetailComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.dark-mode') isDarkMode = false;
  posts: Post[] = [];
  users: User[] = [];
  selectedPost: Post | null = null;
  searchTerm: string = '';
  selectedUser: User | undefined;
  showModal = false;

  constructor(private apiService: ApiService) {}
  
  ngOnInit(): void {    
    this.fetchPosts();
    this.fetchUsers();
  }
  
  private async fetchPosts(): Promise<void> {
    try {
      this.posts = await this.apiService.getPosts();
      console.log('Posts:', this.posts);
    } catch (error) {
      console.error('Errore Post:', error);
    }
  }
  
  private async fetchUsers(): Promise<void> {
    try {
      this.users = await this.apiService.getUsers();
      console.log('Users:', this.users);
    } catch (error) {
      console.error('Errore User:', error);
    }
  }
  
  getUserByPostId(postId: number): User | undefined {
    return this.users.find(user => user.id === postId);
  }
  
  getInitials(name: string): string {
    const names = name.split(' ');
    return (names[0][0] + names[1][0]).toUpperCase();
  }
  
  showPostDetails(post: Post): void {
    this.selectedPost = this.selectedPost === post ? null : post;
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  filterPosts(): Post[] {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showUserDetails(userId: number): void {
    this.selectedUser = this.users.find(user => user.id === userId);
    this.showModal = true;
  }

  closeUserDetails(): void {
    this.selectedUser = undefined;
    this.showModal = false;
  }
}