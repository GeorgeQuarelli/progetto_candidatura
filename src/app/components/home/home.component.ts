import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Post } from '../../../interfaces/post.interface';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  selectedPost: Post | null = null;

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
}